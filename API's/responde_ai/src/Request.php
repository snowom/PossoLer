<?php

declare(strict_types=1);

namespace RespondeAi;

use Exception;
use GuzzleHttp\Client;

class Request
{
    private $client;
    private $link;
    private $header;
    private $endpoint;
    
    
    private $response;

    public function __construct(string $userToken, string $exerciseId)
    {
        $this->client = new Client();
        $this->link = 'https://content.respondeai.com.br';
        $this->endpoint = "/api/v2/books/bookExercise/{$exerciseId}";
        $this->header = [
            'Content-Type' => 'application/json',
            'User-JWT' => $userToken
        ];
    }

    public function getSolution()
    {
        $responseRequest = $this->doRequest();

        return ($responseRequest['response']) 
            ? $this->parseToHtmlEntities($responseRequest) 
            : $responseRequest; 
    }


    private function doRequest()
    {
        try{
            $this->response = $this->client->request('GET', "{$this->link}{$this->endpoint}", [
                'headers' => $this->header,
            ]);

            if($this->response->getStatusCode() == 200){
                $jsonResponse = json_decode($this->response->getBody()->getContents());
                try{
                    $lightSolution = $jsonResponse->lightSolution ?? throw new Exception('Falha ao obter objeto LightSolution');
                    $finalAnswer = $jsonResponse->lightAnswer ?? throw new Exception('Falha ao obter objeto LightAnswer');
                    return ['response' => true, 'steps' => $lightSolution, 'answer' => $finalAnswer];
                }catch(\Exception $e){
                    return ['response' => false, 'msg' => $e->getMessage()];
                }
            }
        }catch(\Exception $e){
            if(strpos($e->getMessage(), '401 Unauthorized') !== false){
                return ['response' => false, 'msg' => 'Não Autorizado'];
            }
            return ['response' => false, 'msg' => 'Erro ao realizar request (' . $e->getMessage() .')'];
        }
    }


    private function parseToHtmlEntities($arrayResponse)
    {
        $parsedSteps = [];
        $parsedAnswer = htmlentities($arrayResponse['answer']);

        foreach($arrayResponse['steps'] as $step){
            $parsedSteps[] = htmlentities($step);
        }
        return ['response' => true, 'parsedSteps' => $parsedSteps, 'parsedAnswer' => $parsedAnswer];
    }
}

?>