<?php

declare(strict_types=1);

namespace BrainlyApi;

use GuzzleHttp\Client;
use BrainlyApi\Code;
use BrainlyApi\Log;

class Request
{
    private $client;
    private $code;

    public function __construct()
    {
        $this->client = new Client;
        $this->code = new Code;
    }

    /**
     * Realiza um GET na URL para ver se a página está disponível
     * @param string $urlTarefa
     * @return array;
     */
    function doRequest(string $urlTarefa) : array
    {
        try{
            $response = $this->client->request($urlTarefa);
            return ($response->getStatusCode() == 200)
                ? ['status' => true, 'response' => $this->code->getSourceCode($urlTarefa)]
                : ['status' => false, 'response' => 'pagina indisponivel'];
        }catch(\Exception $e){
            (new Log)->logger->error('[EXCEPTION REQUEST] - ' . $e->getMessage());
            return ['status' => false, 'response' => 'pagina indisponivel'];
        }
    }
}
