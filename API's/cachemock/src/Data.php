<?php

declare(strict_types=1);

namespace CacheMock;
use Exception;

class Data
{
    /**
     * Recebe dados vindos da extensão
     * @return array
     */
    function receivedPostData() : array
    {
        try{
            $json = file_get_contents('php://input');
            $obj = json_decode($json);

            if(!isset($obj->key) || empty($obj->key)) throw new Exception("Erro ao pegar objeto 'key'");
            if(!isset($obj->pageSource) || empty($obj->pageSource)) throw new Exception("Erro ao pegar obejeto 'pageSource'");

            return [
                'status' => 'success',
                'key' => $obj->key,
                'pageSource' => $obj->pageSource
            ];
        }catch(\Exception $e){
            die(json_encode([
                'status' => 'failed',
                'message' => $e->getMessage()
            ]));
        }
    }


    /**
     * Recebe dados vindos da extensão
     * @return array
     */
    function getJSONData()
    {
        try{
            $json = file_get_contents('php://input');
            $obj = json_decode($json);

            if(!isset($obj->key) || empty($obj->key)) throw new Exception("Erro ao pegar objeto 'key'");

            return [
                'status' => 'success',
                'key' => $obj->key,
            ];
        }catch(\Exception $e){
            die(json_encode([
                'status' => 'failed',
                'message' => $e->getMessage()
            ]));
        }
    }
}

?>