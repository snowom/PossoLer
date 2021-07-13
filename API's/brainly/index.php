<?php

//Corrige problema de CORS da API
header('Access-Control-Allow-Origin: *');

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