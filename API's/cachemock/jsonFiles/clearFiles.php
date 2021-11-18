<?php

const PATH = __DIR__ . '/../jsonFiles/';
const DENIED_LIST = ['clearFiles.php', 'countFiles.php', 'index.php'];

try{
    $files = scandir(PATH);
    $files = array_diff(scandir(PATH), array('.', '..'));
    foreach($files as $file){
        if(!in_array($file, DENIED_LIST)) unlink(PATH . $file);
    }
    die('Pasta foi limpa!');
}catch(\Exception $e){
    die($e->getMessage());
}

?>