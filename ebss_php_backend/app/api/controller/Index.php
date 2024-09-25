<?php
namespace app\api\controller;
use app\Basic;
use app\service\system\ConfigsService;
use Endroid\QrCode\Builder\Builder;
use Flc\Dysms\Client;
use Flc\Dysms\Request\SendSms;
use think\facade\Db;
use think\facade\Config;
use Nette\Utils\Image;
class Index extends Basic
{
    public function index(){
        return $this->success();
    }
    public function upload()
    {
        $debugs = [];
        $file = $this->request->file('file');
        $savename = \think\facade\Filesystem::putFile( 'upload', $file);
        $extension = $file->extension();
        if($extension=='jpg'||$extension=='jpeg'||$extension=='png'||$extension=='gif'){
            for ($i=0;$i<5;$i++){
                $debugs[]=$size = filesize(PROJECT_ROOT.'/'.$savename);
                if($size>10*10000){
                    $image = Image::fromFile(PROJECT_ROOT.'/'.$savename);
                    $image->save($savename, 75,IMAGETYPE_JPEG);
                }else{
                    break;
                }
            }
        }
        return $this->success('上传成功',[
            'savename'=>$savename,
//            '$debugs'=>$debugs,
//            '$file'=>PROJECT_ROOT.'/'.$savename,
        ]);
    }
    public function sendsms()
    {
        if (empty($this->param('tel'))) {
            return $this->ajax_return(0, '发送失败,手机号不能为空');
        }
        if (empty($this->param('type'))) {
            return $this->ajax_return(0, '发送失败,type不能为空');
        }
        $config = [
            'accessKeyId' => ConfigsService::get('SmsAccessKeyId'),
            'accessKeySecret' => ConfigsService::get('SmsAccessKeySecret'),
        ];
        $client = new Client($config);
        $sendSms = new SendSms;
        $sendSms->setPhoneNumbers($this->param('tel'));
        $sendSms->setSignName(ConfigsService::get('SmsSignName'));
        $sendSms->setTemplateCode(ConfigsService::get('SmsTemplateCode'));
        $code = rand(1000, 9999);
        $sendSms->setTemplateParam(['code' => $code]);
        $sendSms->setOutId($this->param('tel'));
        $result = $client->execute($sendSms);
        if ($result->Code == 'OK') {
            table('base_code')->insert([
                'tel' => $this->param('tel'),
                'code' => $code,
                'type' => $this->param('type'),
                'add_time' => time(),
            ]);
            return $this->success( '短信发送成功');
        } else {
            return $this->error( $result->Message?$result->Message:'短信发送失败', ['$result' => $result]);
        }
    }



}
