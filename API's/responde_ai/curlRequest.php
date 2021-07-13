<?php

namespace RespondeAi;

class CurlRequest
{
    private $link;
    private $query;
    private $payload;
    private $header;
    private $token;
    private $exerciseId;
    private $curl;


    public function __construct()
    {
        $this->link = 'https://content.respondeai.com.br/graphql';
        $this->query = 'query bookExercise($id: ID!) {bookExercise(id: $id) {id solution answer topic {id name subject {id name __typename}theory {id __typename} exercises {id __typename } __typename } __typename }}';
        $this->payload = [
            'operationName' => 'bookExercise',
            'query' => $this->query
        ];
    }


    public function getSolution($token, $exerciseId)
    {
        $this->token = $token;
        $this->exerciseId = $exerciseId;

        $responseRequest = $this->doRequest();

        if($responseRequest['response']){
            return $this->parseToHtmlEntities($responseRequest);
        }

        return $responseRequest;
    }


    private function doRequest()
    {
        $this->fullAttributesValues($this->exerciseId);
        
        $this->curl = curl_init();
        $this->configCurl($this->curl);

        $response = curl_exec($this->curl);
        $status = curl_getinfo($this->curl, CURLINFO_RESPONSE_CODE);

        if($status == 200){
            $jsonResponse = json_decode($response);
            try{
                $steps = $jsonResponse->data->bookExercise->solution;
                $finalAnswer = $jsonResponse->data->bookExercise->answer;
                return ['response' => true, 'steps' => $steps, 'answer' => $finalAnswer];
            }catch(\Exception $e){
                return ['response' => false, 'msg' => 'Falha ao obter Objetos'];
            }
        }

        if($status == 401){
            return ['response' => false, 'msg' => 'Não Autorizado'];
        }

        return ['response' => false, 'msg' => 'Erro ao realizar request (' . curl_error($this->curl) .')'];
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


    private function configCurl($curl)
    {
        curl_setopt_array($curl, [
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 15,
            CURLOPT_FRESH_CONNECT => 1,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_HTTPHEADER => $this->header,
            CURLOPT_POSTFIELDS => json_encode($this->payload),
            CURLOPT_URL => $this->link
        ]);
    }


    private function fullAttributesValues($exerciseId)
    {
        $this->header = [
            'Content-Type: application/json',
            "User-JWT: $this->token"
        ];

        $this->payload['variables'] = [
            'id' => $exerciseId
        ];
    }


    public function closeCurl()
    {
        try{
            curl_close($this->curl);
        }catch(\Exception $e){

        }
    }
}

?>