<?php

declare(strict_types=1);

namespace Cachemock;

use GuzzleHttp\Client;
use Cachemock\Log;

class RequestURL
{
    /**
     * @var Client $client
     */
    private $client;

    public function __construct()
    {
        $this->client = new Client;
    }

    /**
     * @param string $link
     * @return array
     * Faz um GET para a página que se quer pegar o conteudo em cache para saber se ela existe;
     */
    public function sendRequestURL(string $link) : array
    {
        $cacheViewLink = 'https://webcache.googleusercontent.com/search?q=cache:';
        $uri = "{$cacheViewLink}{$link}";
        try{
            $response = $this->client->request('GET', $uri);
            $resposta = ($response->getStatusCode() == 200) ? true : false;
            return [
                'status' => $response->getStatusCode(), 
                'resposta' => $resposta,
                'link' => $uri
            ];
        }catch(\Exception $e){
            if(strpos($e->getMessage(), 'resulted in a `404 Not Found`') !== false){
                return [
                    'status' => 404,
                    'resposta' => false,
                ];
            }
            (strpos($link, 'valor.globo.com') !== false)
                ? (new Log)->logger->warning("[VALOR_ECON] - {$e->getMessage()}")
                : (new Log)->logger->warning("[O POPULAR] - {$e->getMessage()}");
            return [
                'status' => 'undefined_error_in_log',
                'resposta' => false,
            ];
        }
    }
}

?>