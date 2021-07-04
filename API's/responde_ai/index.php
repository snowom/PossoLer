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

        <!-- GOOGLE FONTS CSS -->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>

        <!-- MATH JAX JS -->
        <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-svg.js"></script>

        <!-- LOTTIE JS -->
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

        <!-- BOOTSTRAP CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    </head>
    <body>
        <?php 
            if(isset($_GET['userToken']) && isset($_GET['exerciseId'])){
                $responseRequest = $request->getSolution($_GET['userToken'], $_GET['exerciseId']);

                if($responseRequest['response']){
                    $request->closeCurl();
                    echo $utils->mountHTMLBlock($responseRequest);
                }else{
                    $request->closeCurl();
                    if($responseRequest['msg'] == 'Não Autorizado'){
                        echo $utils->mountTokenErrorBlock();
                    } else{
                        echo $utils->mountGeneralErrorBlock($responseRequest['msg']);
                        echo $utils->injectBackgroundColorJS();
                    }
                }
            }else{
                echo 'Falha ao obter userToken ou exerciseId';
            }
        ?>
    </body>
</html>