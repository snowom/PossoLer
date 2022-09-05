<?php

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

require_once __DIR__ . '/../vendor/autoload.php';

use RespondeAi\RequestExercise;
use RespondeAi\Data;

const ALLOWED_ACTIONS = ['getTheory', 'getFixationExercise', 'getListExercise'];
$requestExercise = new RequestExercise;
$data = new Data;

try{
    if(isset($_GET['action']) && !empty($_GET['action'])){

        if(!in_array($_GET['action'], ALLOWED_ACTIONS))
            throw new Exception('Ação não permitida');

        if($_GET['action'] == 'getTheory'){
            $payload = $data->getJSONPostData('theory');
            
            if($payload['status'] != 'success')
                throw new Exception($payload['message']);
            
            $token = $payload['token'];
            $topicId = $payload['topicId'];

            $requestResponse = $requestExercise->doRequest('theory', $token, $topicId);
            if($requestResponse["status"] == 'success')
                die(json_encode($requestResponse));
            die($requestResponse["msg"]);
        }
        else if($_GET['action'] == 'getFixationExercise'){
            $payload = $data->getJSONPostData('fixationExercise');

            if($payload['status'] != 'success')
                throw new Exception($payload['message']);

            $token = $payload['token'];
            $exerciseId = $payload['exerciseId'];

            $requestResponse = $requestExercise->doRequest('exercise', $token, $exerciseId);
            if($requestResponse["status"] == 'success')
                die(json_encode($requestResponse));
            die($requestResponse["msg"]);
        }
        else if($_GET['action'] == 'getListExercise'){
            $payload = $data->getJSONPostData('listExercise');

            if($payload['status'] != 'success')
                throw new Exception($payload['message']);

            $token = $payload['token'];
            $exerciseId = $payload['listExerciseId'];

            $requestResponse = $requestExercise->doRequest('listExercise', $token, $exerciseId);
            if($requestResponse["status"] == 'success')
                die(json_encode($requestResponse));
            die($requestResponse["msg"]);
        }
    }else{
        throw new Exception("Falha ao obter parametro 'action'");
    }
}catch(Exception $e){
    die(json_encode(['status' => 'failed', 'message' => $e->getMessage()]));
}

?>