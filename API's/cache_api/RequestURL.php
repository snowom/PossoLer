<?php

namespace ValorEconomico;

class RequestURL
{
    private $curl;

    public function SendRequestURL(String $link)
    {
        /* TENTA REALIZAR REQUISIÇÃO COM HTTP */
        $this->curl = curl_init();
        $cacheViewLink = 'http://webcache.googleusercontent.com/search?q=cache:';
        $this->configCurl("{$cacheViewLink}{$link}");
        curl_exec($this->curl);

        $status = curl_getinfo($this->curl, CURLINFO_RESPONSE_CODE);

        if($status == '200'){
            $link = curl_getinfo($this->curl, CURLINFO_EFFECTIVE_URL);
            curl_close($this->curl);
            $arrayResponse = ['status' => $status, 'resposta' => ($status == '200') ? true : false, 'link' => $link];
            return $arrayResponse;
        }
        curl_close($this->curl);
        

        /* CASO FALHE A REQ HTTP, TENTA FAZER REQUISIÇÃO HTTPS */
        $this->curl = curl_init();
        $cacheViewLink = 'https://webcache.googleusercontent.com/search?q=cache:';
        $this->configCurl($this->configCurl("{$cacheViewLink}{$link}"));
        curl_exec($this->curl);

        $status = curl_getinfo($this->curl, CURLINFO_RESPONSE_CODE);
        $link = curl_getinfo($this->curl, CURLINFO_EFFECTIVE_URL);
        curl_close($this->curl);

        $arrayResponse = ['status' => $status, 'resposta' => ($status == '200') ? true : false, 'link' => $link];
        return $arrayResponse;
    }


    private function configCurl($urlRequest)
    {
        curl_setopt_array($this->curl, [
            CURLOPT_CONNECTTIMEOUT => 10000,
            CURLOPT_TIMEOUT => 15000,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_FOLLOWLOCATION => 1,
            CURLOPT_MAXREDIRS => 30,
            CURLOPT_URL => $urlRequest
        ]);
    }
}

?>