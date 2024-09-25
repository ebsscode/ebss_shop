<?php

namespace app\connector;

class HttpConnector
{
    private $client = null;
    public function __construct(){
        $this->client = new \GuzzleHttp\Client(['verify' => false ]);
    }
    public function reqeust($method,$url,$headers = [],$body=[],$form_params=[]){
        $res = $this->client->request($method, $url,[
            'headers'=>$headers,
//            'body'=>$body, //todo...
//            'form_params'=>$form_params,
        ]);
        $response=$res->getBody()->getContents();
        if(empty($response)){
            return null;
        }
        $response = decodeJson($response);
        return $response;
    }
    public function GET($url,$headers = []){
        return $this->reqeust('GET',$url,$headers);
    }
    public function POST($url,$headers = [],$body=[],$form_params=[]){
        return $this->reqeust('POST',$url,$body=[],$form_params=[]);
    }


}