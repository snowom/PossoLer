<?php

declare(strict_types=1);

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

require_once __DIR__ . '/vendor/autoload.php';

use BrainlyApi\Code;

if(isset($_GET['urlTarefa'])){
    $urlTarefa = $_GET['urlTarefa'];
    echo (new Code)->getSourceCode($urlTarefa);
}else{
    echo 'Falha ao pegar variável urlTarefa';
}

?>