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

    public function sendsms()
    {
        CheckService::checkForbidden();
        if (empty($this->param('tel'))) {
            return $this->error( '发送失败,手机号不能为空');
        }
        if (empty($this->param('type'))) {
            return $this->error( '发送失败,type不能为空');
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
