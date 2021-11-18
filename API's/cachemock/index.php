<?php

declare(strict_types=1);
require_once __DIR__ . '/vendor/autoload.php';

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

use CacheMock\Data;
use CacheMock\JSON;

const OPTIONS = ['get', 'post'];

try{
    if(isset($_GET['options']) && !empty($_GET['options']))
        $options = $_GET['options'];
    else
        throw new Exception('Erro ao pegar options');

    if(!in_array($options, OPTIONS))
        throw new Exception('Operação Inválida!');

    if($options == "post"){
        $checkPostData = (new Data)->receivedPostData();
        (new JSON)->createJSON($checkPostData['key'], $checkPostData['pageSource']);
    }else if($options == "get"){
        $checkPostData = (new Data)->getJSONData();
        (new JSON)->getJSONData($checkPostData['key']);
    }
}catch(\Exception $e){
    die($e->getMessage());
}

?>