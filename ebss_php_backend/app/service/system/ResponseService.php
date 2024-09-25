<?php

namespace app\service\system;

class ResponseService
{
    public static function getSuccessCode(): int
    {
        return 1;
    }
    public static function getMessageCode() : int{
        return 0;
    }

}