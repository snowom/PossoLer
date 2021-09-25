<?php

declare(strict_types=1);

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

require_once __DIR__ . '/vendor/autoload.php';

use Cachemock\RequestURL;
use Cachemock\GetPageCode;

    $request = new RequestURL;
    $getPage = new GetPageCode;

    if(isset($_GET['link'])){

        $link = $_GET['link'];
        $resposta = $request->sendRequestURL($link);

        if($resposta['resposta']){
            echo $getPage->getPageSourceCode($resposta['link']);
            die();
        }else{
            if($resposta['status'] == 404){
                echo json_encode(['status' => 'erro', 'resposta' => 'Não existe cache para esta página!']);
                die();
            }else{
                echo json_encode(['status' => 'erro', 'resposta' => 'Error on API request']);
                die();
            }
        }
    }else{
        echo json_encode(['status' => 'erro', 'resposta' => 'Erro ao pegar link']);
        die();
    }

?>