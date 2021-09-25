<?php

namespace Cachemock;

class GetPageCode
{
    public function getPageSourceCode(string $link)
    {
        $html = file_get_contents($link);
        $html = utf8_encode($html);
        return $html;
    }
}

?>