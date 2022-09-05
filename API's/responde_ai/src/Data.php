<?php

declare(strict_types=1);

namespace RespondeAi;

use Exception;

class Data
{
    /**
     * Pega e retorna dados recebidos da extensão via POST
     */
    public function getJSONPostData(String $key) : array
    {
        try{
            $json = file_get_contents('php://input');
            $obj = json_decode($json);

            if(!isset($obj->token) || empty($obj->token)) throw new Exception("Erro ao pegar objeto 'token'");

            if($key == 'theory'){
                if(!isset($obj->topicId) || empty($obj->topicId)) throw new Exception("Erro ao pegar objeto 'topicId'");
                return ['status' => 'success', 'token' => $obj->token, 'topicId' => $obj->topicId];
            }
            if($key == 'fixationExercise'){
                if(!isset($obj->exerciseId) || empty($obj->exerciseId)) throw new Exception("Erro ao pegar objeto 'exerciseId'");
                return ['status' => 'success', 'token' => $obj->token, 'exerciseId' => $obj->exerciseId];
            }
            if($key == 'listExercise'){
                if(!isset($obj->listExerciseId) || empty($obj->listExerciseId)) throw new Exception("Erro ao pegar objeto 'listExerciseId'");
                return ['status' => 'success', 'token' => $obj->token, 'listExerciseId' => $obj->listExerciseId];
            }
        }catch(\Exception $e){
            die(json_encode([
                'status' => 'failed',
                'message' => $e->getMessage()
            ]));
        }
    }
}

?>