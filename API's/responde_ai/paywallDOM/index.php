<?php

declare(strict_types=1);

//Corrige problema de CORS da API
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');


$respondeAI = [
    "site_name" => "Responde Ai",
    "blur_class" => [
        "dOUKdM", "blur", "htZGzZ", "blurs", "chTkVa", "cKfPcs", "gzzuMX", "kEWCPZ"
    ],
    "unlogged_remove_book_block" => [
        "ReactModalPortal",
        "ReactModal__Body--open",
        "NoAccessDisclaimer__Container-sc-6er3z1-0",
    ],
    "unlogged_remove_exercise_block" => [
        "ReactModalPortal",
        "ReactModal__Body--open",
        "NoAccessDisclaimer__Container-sc-6er3z1-0"
    ],
    "unlogged_remove_show_solution_button" => [
        "exercise-expand-button",
        "exercise-theory-expand-button",
        "button"
    ],
    "unlogged_remove_block_theory" => [
        "paywall",
        "theory-container",
        "expand-overlay"
    ],
    "unlogged_exclusive_content" => [
        "login-overlay",
        "main-wrapper"
    ],
    "data_cy" => [
        "format_toggle" => "content-format-toggle-container",
        "theory_text_content" => "theory-text-content-container",
        "theory_video_content" => "theory-video-content-container",
        "exercise_answer_button" => "exercise-show-answer-button-container",
        "exercise_statement" => "exercise-statement",
        "side_menu" => "side-menu-container",
    ],
    "paywall_height_size" => 299,
    "logged_locked_icons" => "MuiSvgIcon-root",
    "logged_enable_scroll_page" => "ReactModal__Body--open",
    "logged_react_modal" => "ReactModal__Overlay",
    "logged_dexter_block" => "no-access-dexter-wall"
];



echo json_encode($respondeAI);

?>