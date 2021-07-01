<?php

namespace RespondeAi;

class Utils
{
    public function mountHTMLBlock($responseRequest)
    {
        $styleH2 = 'color: rgb(54, 170, 173); font-size: 1.5em; font-family: "Droid Serif", serif; margin: 0; font-weight: inherit; outline: none; box-sizing: border-box; font-size: 1.2em;';
        $styleDivResposta = 'border-left: 4px solid rgb(54, 170, 173); padding: 20px; font-size: 1.2em;';
        $styleFontSteps = 'font-size: 1.25em; line-height: 26px; color: rgb(68, 68, 68); text-align: left; overflow: auto hidden; font-weight: 400; padding: 0px; margin: 0px;';
        $styleFontAnswer = 'color: rgb(136, 136, 136); margin-bottom: 15px; text-align: left; overflow: auto hidden;';

        $block = "<div style='flex: 1 1 0%; align-self: center; background-color: white; width: 100%'>";
        $block .= "<div style='padding: 0px 30px;'>";

        //FORMATA E MONTA BLOCO PASSOS DA RESULUÇÃO
        foreach($responseRequest['parsedSteps'] as $index=>$step){
            $currentStep = $index+1;
            $block .= "<div style='$styleFontSteps margin: 60px 0px;'>";
            $block .= "<h2 style='$styleH2'>Passo $currentStep</h2>";
            $block .= "<div style='margin: 30px 0px; 60px;'>$step</div>";
            $block .= '</div>';
        }

        //FORMATA E MONTA BLOCO RESPOSTA
        $block .= "<div style='$styleFontAnswer margin: 30px 0px;'>";
        $block .= "<h2 style='$styleH2'>Resposta</h2>";
        $block .= "
                <div style='$styleDivResposta user-select: none !important;'>
                    <div style='margin: 30px 0px;'>".$responseRequest['parsedAnswer']."</div>
                </div>";
        $block .= '</div>';
        $block .= '</div></div>';

        return $block;
    }
}

?>