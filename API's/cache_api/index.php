<?php

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

require_once('./RequestURL.php');
require_once('./GetPageCode.php');

use ValorEconomico\RequestURL;
use ValorEconomico\GetPageCode;

    $request = new RequestURL;
    $getPage = new GetPageCode;

    if(isset($_GET['link'])){

        $link = $_GET['link'];
        $resposta = $request->SendRequestURL($link);
        
        //echo json_encode($resposta);

        if($resposta['resposta']){
            echo $getPage->getPageSourceCode($resposta['link']);
        }else{
            if($resposta['status'] == '404'){
                echo json_encode(['status' => 'erro', 'resposta' => 'Não existe cache para esta página!']);
                die();
            }
            
            echo json_encode(['status_code' => $resposta['status'], 'status' => 'error_off', 'resposta' => 'Serviço temporariamente indisponível']);
        }

    }else{
        echo json_encode(['status' => 'erro', 'resposta' => 'Erro ao pegar link']);
        die();
    }
?>