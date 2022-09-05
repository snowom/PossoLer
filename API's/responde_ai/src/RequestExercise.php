<?php

declare(strict_types=1);

namespace RespondeAi;

use Exception;
use GuzzleHttp\Client;

class RequestExercise
{
    private Client $client;
    private const QUERIES = [
        'theory' => 'query theory($id: ID!) {theory(id: $id) {id lightBody videos {provider providerId __typename}__typename}}',
        'exercise' => 'query exercise($id: ID!) {exercise(id: $id) {id lightSolution videos {id provider providerId __typename} __typename}}',
        'listExercise' => 'query listExercise($id: ID!) {listExercise(id: $id) {id lightSolution videos {id provider providerId __typename} __typename}}'
    ];

    public function __construct()
    {
        $this->client = new Client();
    }


    public function doRequest(String $operationName, String $token, String $id)
    {
        try{
            if(!key_exists($operationName, self::QUERIES))
                throw new Exception("Operação inválida para request!");

            $response = $this->client->request('POST', 'https://content.respondeai.com.br/graphql', [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'User-JWT' => $token
                ],
                'json' => [
                    'operationName' => $operationName,
                    'query' => self::QUERIES[$operationName],
                    'variables' => [
                        'id' => $id
                    ]
                ]
            ]);

            if($response->getStatusCode() == 200){
                $jsonResponse = json_decode($response->getBody()->getContents());
                try{
                    if($operationName == 'theory'){
                        $lightBody = $jsonResponse->data->theory->lightBody ?? throw new Exception("Falha ao obter objeto \"lightBody\"");
                        $videos = $jsonResponse->data->theory->videos ?? throw new Exception("Falha ao obter objeto \"videos\"");
                        return array_merge(['status' => 'success'], $this->mountResponseJSON($lightBody, $videos));
                    }
                    else if($operationName == 'exercise'){
                        $lightSolution = $jsonResponse->data->exercise->lightSolution ?? throw new Exception("Falha ao obter objeto \"lightSolution\"");
                        $videos = $jsonResponse->data->exercise->videos ?? throw new Exception("Falha ao obter objeto \"videos\"");
                        return array_merge(['status' => 'success'], ['lightSolution' => $lightSolution, 'videos' => $videos]);
                    }
                    else if($operationName == 'listExercise'){
                        $lightSolution = $jsonResponse->data->listExercise->lightSolution ?? throw new Exception("Falha ao obter objeto \"lightSolution\"");
                        $videos = $jsonResponse->data->listExercise->videos ?? throw new Exception("Falha ao obter objeto \"videos\"");
                        return array_merge(['status' => 'success'], ['lightSolution' => $lightSolution, 'videos' => $videos]);
                    }
                }catch(Exception $e){
                    return ['status' => 'failed', 'msg' => $e->getMessage()];
                }
            }
        }catch(Exception $e){
            if(strpos($e->getMessage(), '401 Unauthorized') !== false){
                return ['status' => 'failed', 'msg' => 'Não Autorizado'];
            }
            return ['status' => 'failed', 'msg' => 'Erro ao realizar request (' . $e->getMessage() .')'];
        }
    }


    private function mountResponseJSON(mixed $lightBody, mixed $videos)
    {
        $responseVideos = [];
        foreach($videos as $index=>$video){
            $responseVideos[$index] = $video->providerId;
        }
        $responseLightBody = htmlspecialchars_decode($lightBody);
        return ["lightBody" => $responseLightBody, "videos" => $responseVideos];
    }
}

?>