<?php

namespace Brainly;
require_once './autoload.php';

use Brainly\Utils;

class CurlRequest
{
    function doRequest($urlTarefa)
    {
        $utils = new Utils;
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_CONNECTTIMEOUT => 10000,
            CURLOPT_TIMEOUT => 15000,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $urlTarefa
        ]);

        curl_exec($curl);
        $status = curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
        curl_close($curl);

        if($status == 200){
            return ['status' => true, 'response' => $utils->getSourceCode($urlTarefa)];
        }else{
            return ['status' => false, 'response' => 'pagina indisponivel'];
        }
    }
}

?>