<?php

declare(strict_types=1);

namespace BrainlyApi;
require_once './../simple_html_dom.php';

use BrainlyApi\Log;
use Exception;

class Code
{
    /**
     * Pega código fonte do trecho ocultado pelo Javascript e o retorna em JSON
     * @param string $urlTarefa
     * @return string
     */
    function getSourceCode(string $urlTarefa) : string
    {
        try{
            $html = file_get_html($urlTarefa);
            
            if(empty($html)) throw new Exception('Page not found or error in file_get_html');
            $answers = $html->find('.brn-qpage-next-answer-box-content');
            
            if(empty($answers)) throw new Exception('Answers is Empty!');

            $arrayResponse = [
                'answers' => [
                    strval($answers[0]->innertext)
                ]
            ];

            foreach($answers as $key => $answer){
                if ($key==0) continue;
                $arrayResponse['answers'][$key] = strval($answer->innertext);
            }
            return json_encode($arrayResponse);
            
        }catch(\Exception $e){
            (new Log)->logger->error('[EXCEPTION getSourceCode]' . $e->getMessage());
            return json_encode(['erro' => 'Look Log Exception']);
        }
    }
}