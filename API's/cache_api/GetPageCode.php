<?php

namespace ValorEconomico;
require_once('./../simple_html_dom.php');


class GetPageCode
{
    public function getPageSourceCode(String $link)
    {
        $html = file_get_html($link);
        $html = utf8_encode($html);
        return $html;
    }
}

?>