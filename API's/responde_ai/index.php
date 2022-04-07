<!DOCTYPE html>

<?php

require_once __DIR__ . '/vendor/autoload.php';

use RespondeAi\Request;
use RespondeAi\Utils;

$request = new Request;
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
            try{
                $userToken = (isset($_GET['userToken']) && !empty($_GET['userToken'])) 
                    ? $_GET['userToken']
                    : throw new Exception('Falha ao obter userToken');

                $exerciseId = (isset($_GET['exerciseId']) && !empty($_GET['exerciseId']))
                    ? $_GET['exerciseId']
                    : throw new Exception('Falha ao obter exerciseId');

                $responseRequest = $request->getSolution($userToken, $exerciseId);

                if($responseRequest['response']){
                    echo $utils->setBackgroundColorJS("#fff");
                    echo $utils->deleteLoadingAnimation();
                    echo $utils->mountHTMLBlock($responseRequest);
                }else{
                    if($responseRequest['msg'] == 'Não Autorizado'){
                        echo $utils->setBackgroundColorJS("#fff");
                        echo $utils->deleteLoadingAnimation();
                        echo $utils->mountTokenErrorBlock();
                    } else{
                        echo $utils->deleteLoadingAnimation();
                        echo $utils->mountGeneralErrorBlock($responseRequest['msg']);
                        echo $utils->setBackgroundColorJS("#f7f7f7");
                    }
                }
            }catch(\Exception $e){
                echo $utils->deleteLoadingAnimation();
                echo $utils->mountGeneralErrorBlock($e->getMessage());
                echo $utils->setBackgroundColorJS("#f7f7f7");
            }
        ?>

        <style>
            /* Personalização Scroll Bar */
            ::-webkit-scrollbar {
                width: 8px;
            }
            ::-webkit-scrollbar-thumb {
                background: rgb(153, 153, 153);
                border-radius: 10px;
            }
            ::-webkit-scrollbar-track {
                background: transparent;
            }
        </style>
    </body>
</html>