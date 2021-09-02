<?php

    //Corrige problema de CORS da API
    header("Access-Control-Allow-Headers: Authorization, Content-Type");
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json; charset=utf-8');

    //REQUIRED ENV CONFIG JS IN https://otempo.com.br/js/paywall-mainElement/consts.js

    $arrayConfigs = [
        'DASHBOARD_API_URL' => 'https://dashboard-api.otempo.com.br',
        'COOKIE_ALLOW_CREDIT' => 'allowCreditRead',
        'OTEMPO_REST_SERVICE_TOKEN_ENCODED' => 'NzY3ODk4OTQ1NDRkNzY4NGUyMTk4MjE3ZDdhOGNkMzdhdzE'
    ];

    echo json_encode($arrayConfigs);
?>