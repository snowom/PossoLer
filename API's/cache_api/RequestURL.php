<?php

namespace ValorEconomico;

class RequestURL
{
    public function SendRequestURL(String $link)
    {
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_CONNECTTIMEOUT => 10000,
            CURLOPT_TIMEOUT => 15000,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_FOLLOWLOCATION => 1,
            CURLOPT_MAXREDIRS => 30,
            CURLOPT_URL => $link
        ]);

        curl_exec($curl);
        $status = curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
        $link = curl_getinfo($curl, CURLINFO_EFFECTIVE_URL);
        curl_close($curl);

        $arrayResponse = ['status' => $status, 'resposta' => ($status == '200') ? true : false, 'link' => $link];
        return $arrayResponse;
    }
}

?>