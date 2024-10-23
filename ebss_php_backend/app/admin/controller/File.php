<?php
namespace app\admin\controller;
use app\Basic;
use app\service\system\CheckService;
use app\service\system\FileService;
use Nette\Utils\Image;

class File extends Basic
{
    public function upload()
    {
        $debugs = [];
        $file = $this->request->file('file');
        $extension = $file->extension();
        CheckService::allowedUploadFile($extension);
        $savename = \think\facade\Filesystem::putFile( 'upload', $file);
        $file_abs_name = FileService::saveFile($savename);
        if($extension=='jpg'||$extension=='jpeg'||$extension=='png'||$extension=='gif'){
            FileService::smallImg($file_abs_name);
        }
        return $this->success('上传成功',[
            'savename'=>$savename,
        ]);
    }

}
