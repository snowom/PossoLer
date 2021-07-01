<!DOCTYPE html>

<?php

//Corrige problema de CORS da API
header('Access-Control-Allow-Origin: *');

use RespondeAi\curlRequest;
use RespondeAi\Utils;

require_once('./curlRequest.php');
require_once('./utils.php');

$request = new curlRequest;
$utils = new Utils;

?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resolução</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>
        <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-svg.js"></script>
    </head>
    <body>
        <?php 
            if(isset($_GET['userToken']) && isset($_GET['exerciseId'])){
                $responseRequest = $request->getSolution($_GET['userToken'], $_GET['exerciseId']);

                if($responseRequest['response']){
                    echo html_entity_decode($utils->mountHTMLBlock($responseRequest));
                }else{
                    echo $responseRequest['msg'];
                }
            }else{
                echo 'Falha ao obter userToken ou exerciseId';
            }
        ?>
    </body>
</html>