<?php

namespace app\service\system;

use Nette\Utils\FileSystem;

class FileService
{
    public static function saveFile($filename){
        $file_abs_name = ConfigsService::get("static_dir").'/'.$filename;
        FileSystem::rename(PROJECT_ROOT.'/../runtime/storage/'.$filename,$file_abs_name);
        return $file_abs_name;
    }

}