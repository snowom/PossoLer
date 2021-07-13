<!DOCTYPE html>

<?php

//require_once './Composer/vendor/autoload.php';
require_once __DIR__ . '/autoload.php';

use RespondeAi\CurlRequest;
use RespondeAi\Utils;

$request = new CurlRequest;
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
                    echo $utils->setBackgroundColorJS("#fff");
                    echo $utils->deleteLoadingAnimation();
                    echo $utils->mountHTMLBlock($responseRequest);
                }else{
                    $request->closeCurl();
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
            }else{
                echo $utils->deleteLoadingAnimation();
                echo $utils->mountGeneralErrorBlock('Falha ao obter userToken ou exerciseId');
            }
        ?>
    </body>
</html>