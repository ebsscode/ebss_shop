<?php
namespace app\api\controller;
use app\Basic;
use app\service\system\CheckService;
use app\service\system\ConfigsService;
use app\service\system\FileService;
use Flc\Dysms\Client;
use Flc\Dysms\Request\SendSms;
use Nette\Utils\Image;
use Nette\Utils\FileSystem;
class Index extends Basic
{
    public function index(){
        return $this->success();
    }
    public function upload()
    {
        $debugs = [];
        $file = $this->request->file('file');
        $extension = $file->extension();
        CheckService::allowedUploadFile($extension);
        $savename = \think\facade\Filesystem::putFile( 'upload', $file);
        $file_abs_name = FileService::saveFile($savename);
        if($extension=='jpg'||$extension=='jpeg'||$extension=='png'||$extension=='gif'){
            for ($i=0;$i<5;$i++){
                $debugs[]=$size = filesize($file_abs_name);
                if($size>10*10000){
                    $image = Image::fromFile($file_abs_name);
                    $image->save($file_abs_name, 75,IMAGETYPE_JPEG);
                }else{
                    break;
                }
            }
        }
        return $this->success('上传成功',[
            'savename'=>$savename,
//            '$debugs'=>$debugs,
        ]);
    }
    public function sendsms()
    {
        CheckService::checkForbidden();
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
            ]);
            return $this->success( '短信发送成功');
        } else {
            return $this->error( $result->Message?$result->Message:'短信发送失败', ['$result' => $result]);
        }
    }



}
