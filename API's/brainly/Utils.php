<?php

namespace Brainly;

require_once './../simple_html_dom.php';

class Utils
{
    function getSourceCode($urlTarefa)
    {
        $html = file_get_html($urlTarefa);
        $answers = $html->find('.brn-qpage-next-answer-box-content');

        if(empty($answers)) return null;

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
    }
}

?>