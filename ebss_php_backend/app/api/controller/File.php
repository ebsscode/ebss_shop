<?php
namespace app\api\controller;
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

}
