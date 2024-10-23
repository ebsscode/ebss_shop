<?php

namespace app\service\system;

use Nette\Utils\FileSystem;
use Nette\Utils\Image;

class FileService
{
    public static function smallImg($filename){
        for ($i=0;$i<5;$i++){
            $size = filesize($filename);
            if($size>10*10000){
                $image = Image::fromFile($filename);
                $image->save($filename, 75,IMAGETYPE_JPEG);
            }else{
                break;
            }
        }
    }
    public static function saveFile($filename){
        $file_abs_name = ConfigsService::get("static_dir").'/'.$filename;
        FileSystem::rename(PROJECT_ROOT.'/../runtime/storage/'.$filename,$file_abs_name);
        return $file_abs_name;
    }

}