<?php

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

require_once './../connectBD.php';

$check = checkPostData();

if($check['status']){
    $conectaBD = new connectBD();
    $conn = $conectaBD->connect();

    if($conn == 'SUCESSO'){
        try{
            $codigoSite = $check['codigo_site'];
            $data = $check['data'];
            $horario = $check['horario'];

            $query = "insert into dados_acesso (codigo_site, data, horario) values ($codigoSite, '$data', '$horario')";
            $result = $conectaBD->getConn()->query($query);

            if($result == 1){
                echo json_encode(['STATUS'=>'Sucesso ao executar query!']);
            }else{
                throw new Exception('Falha ao executar Query');
            }   
        }catch(\Exception $e){
            echo json_encode(['STATUS'=>$e->getMessage()]);
        }
        finally{
            $conectaBD->getConn()->close();
        }
    }
}else{
    echo 'Não foram passados os parâmetros esperados';
}


function checkPostData()
{
    $json = file_get_contents('php://input');
    $obj = json_decode($json);

    if(
        (isset($obj->codigo_site) || !empty($obj->codigo_site)) && 
        (isset($obj->data) || !empty($obj->data)) && 
        (isset($obj->horario) || !empty($obj->horario))
    ){
        return ['status' => true,
            'codigo_site' => $obj->codigo_site,
            'data' => $obj->data,
            'horario' => $obj->horario
        ];
    }

    return ['status' => false];
}

?>