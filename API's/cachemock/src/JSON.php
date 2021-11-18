<?php

namespace CacheMock;

class JSON
{
    private const LOG_PATH = __DIR__ . '/../jsonFiles/';

    /**
     * Cria arquivo JSON com conteudo da página desbloqueada
     * @param string $filename
     * @param string $content
     */
    function createJSON(string $filename, string $content)
    {
        try{
            $json = json_encode(['content' => $content]);
            file_put_contents(self::LOG_PATH . $filename, $json);
            die("success");
        }catch(\Exception $e){
            die($e->getMessage());
        }
    }


    /**
     * Retorna conteudo da página desbloqueada do arquivo indicado
     * @param string $filename
     */
    function getJSONData(string $filename)
    {
        try{
            $data = file_get_contents(self::LOG_PATH . $filename);
            die($data);
        }catch(\Exception $e){
            die(json_encode([
                'status' => 'failed',
                'message' => $e->getMessage()
            ]));
        }
    }

}

?>