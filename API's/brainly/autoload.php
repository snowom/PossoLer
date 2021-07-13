<?php

const ROOT_NAMESPACE = 'Brainly';

spl_autoload_register(function($class){
    $namespace = explode("\\", $class)[0];

    if($namespace == ROOT_NAMESPACE){
        $parts = explode("\\", $class);
        $className = $parts[count($parts)-1];
        require_once __DIR__ . '/' . str_replace('\\', '/', $className) . '.php';
    } else{
        require_once __DIR__ . '/' . str_replace('\\', '/', $class) . '.php';
    }
});