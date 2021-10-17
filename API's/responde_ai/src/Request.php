<?php

declare(strict_types=1);

namespace RespondeAi;

use Exception;
use GuzzleHttp\Client;

class Request
{
    private $link;
    private $query;
    private $payload;
    private $header;
    private $client;
    private $response;

    public function __construct()
    {
        $this->client = new Client();
        $this->link = 'https://content.respondeai.com.br/graphql';
        $this->query = 'query bookExercise($id: ID!) {bookExercise(id: $id) {id solution answer topic {id name subject {id name __typename}theory {id __typename} exercises {id __typename } __typename } __typename }}';
        $this->payload = [
            'operationName' => 'bookExercise',
            'query' => $this->query
        ];
    }


    public function getSolution($token, $exerciseId)
    {
        $this->header = [
            'Content-Type' => 'application/json',
            'User-JWT' => $token
        ];

        $this->payload['variables'] = [
            'id' => $exerciseId
        ];

        $responseRequest = $this->doRequest();

        if($responseRequest['response']){
            return $this->parseToHtmlEntities($responseRequest);
        }

        return $responseRequest;
    }


    private function doRequest()
    {
        try{
            $this->response = $this->client->request('POST', $this->link, [
                'headers' => $this->header,
                'json' => $this->payload
            ]);

            if($this->response->getStatusCode() == 200){
                $jsonResponse = json_decode($this->response->getBody()->getContents());
                try{
                    $steps = $jsonResponse->data->bookExercise->solution ?? throw new Exception('Falha ao obter objeto Steps');
                    $finalAnswer = $jsonResponse->data->bookExercise->answer ?? throw new Exception('Falha ao obter objeto FinalAnswer');
                    return ['response' => true, 'steps' => $steps, 'answer' => $finalAnswer];
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