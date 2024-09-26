<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// [ 应用入口文件 ]
namespace think;
require __DIR__ . '/../vendor/autoload.php';
define('PROJECT_ROOT',str_replace("\\",'/',__DIR__));
// 执行HTTP应用并响应
//$http = (new App())->http;
$http = (new App())->setEnvName('dev')->http;
$response = $http->run();
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Origin, Content-Type, Cookie, Accept, X-Requested-With, token, user-id,platform,version,lang,platform,os,is-weixin-browser,mch-id,base-module-id,active-module-id');
header('Access-Control-Allow-Methods:GET, POST,OPTIONS');
$response->send();
$http->end($response);