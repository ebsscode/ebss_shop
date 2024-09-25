<?php
namespace app;

use Exception;
/**
 * 异常
 */
class MyException extends \RuntimeException
{
    public function __construct($code = 0,string $message = '' )
    {
        parent::__construct($message, $code);
    }
}
