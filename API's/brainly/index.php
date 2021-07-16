<?php

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

require_once './autoload.php';

use Brainly\CurlRequest;
require_once './../simple_html_dom.php';


if(isset($_GET['urlTarefa'])){

    $urlTarefa = $_GET['urlTarefa'];
    $request = new CurlRequest;
    $responseRequest = $request->doRequest($urlTarefa);

    if($responseRequest['status']){
        echo $responseRequest['response'];
        return;
    }
    print_r($responseRequest['response']);
}else{
    echo 'Falha ao pegar variável urlTarefa';
}

?>