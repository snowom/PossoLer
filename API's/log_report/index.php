<?php

declare (strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';
use LogReport\Log;

$_POST = json_decode(file_get_contents("php://input"), true);
$log = new Log;

if(isset($_POST['msg']) && isset($_POST['site'])){
    try{
        $log->logger->warning("[{$_POST['site']}] --> {$_POST['msg']}");
        echo 'sucesso';
    }catch(\Exception $e){
        echo $e->getMessage();
    }
}else{
    die('Os parâmetros exigidos não existem');
}

?>