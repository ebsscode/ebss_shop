<?php
namespace app\api\controller;
use app\Basic;
use app\Logined;
use app\service\system\ConfigsService;
use think\facade\Config;
use think\facade\Db;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevelHigh;
use Endroid\QrCode\Label\Alignment\LabelAlignmentCenter;
use Endroid\QrCode\Label\Font\NotoSans;
use Endroid\QrCode\RoundBlockSizeMode\RoundBlockSizeModeMargin;
use Endroid\QrCode\Writer\PngWriter;
use Endroid\QrCode\Writer\BinaryWriter;
use Nette\Utils\Image;

class Share extends Logined
{
    public function share_ewm(){
        $logo_img = $this->user_info['avatar_img']?$this->user_info['avatar_img']:ConfigsService::get('logo_img');
        $url = '';
        $platform = $this->request->header('platform');
        if($platform=='web'||$platform=='app'){
            $image = Builder::create()
                ->writer(new PngWriter())
                ->writerOptions([])
                ->data($this->request->domain()."?share_id=".$this->user_id)
                ->encoding(new Encoding('UTF-8'))
                ->errorCorrectionLevel(new ErrorCorrectionLevelHigh())
                ->size(300)
                ->margin(10)
                ->roundBlockSizeMode(new RoundBlockSizeModeMargin())
                ->logoPath(ConfigsService::get("static_dir").'/'.$logo_img)
                ->logoResizeToWidth(50)
                ->logoResizeToWidth(50)
                ->logoPunchoutBackground(true)
                ->validateResult(false)
                ->build();
            $image->saveToFile(ConfigsService::get("static_dir").'/upload/share/web/'."{$this->user_id}.png");
            $url = 'upload/share/web/'."{$this->user_id}.png";
        }
        if($platform=='mp-weixin'){
            $config = [
                'app_id' => ConfigsService::get('wx_xcx_app_id'),
                'secret' => ConfigsService::get('wx_xcx_secret'),
            ];
            $app = new \EasyWeChat\MiniApp\Application($config);
            $api = $app->getClient();
            $response = $api->postJson('/wxa/getwxacode', [
                "path" => "pages/index/index?share_id=".$this->user_id,
                "env_version" => "develop"
            ]);
            $result_str = $response->getContent();
            $image = Image::fromString($result_str);
            $image->save(ConfigsService::get("static_dir").'/upload/share/wxminiapp/'."{$this->user_id}.png",NULL,Image::JPEG);
            $url = 'upload/share/wxminiapp/'."{$this->user_id}.png";
        }
        if($platform=='mp-alipay'){
            \Alipay\EasySDK\Kernel\Factory::setOptions(getAliPayOptions('miniapp'));
            $response = \Alipay\EasySDK\Kernel\Factory::base()->qrcode()->create('pages/index/index',"share_id=".$this->user_id,'邀请好友')->toMap();
            if(empty($response['qr_code_url']))return $this->success('生成二维码失败');
            $image = Image::fromString(file_get_contents($response['qr_code_url']));
            $image->save(ConfigsService::get("static_dir").'/upload/share/alipayminiapp/'."{$this->user_id}.png",NULL,Image::JPEG);
            $url = 'upload/share/alipayminiapp/'."{$this->user_id}.png";
        }

        return $this->success('请求成功',[
            'url'=> $url,
        ]);
    }

}
