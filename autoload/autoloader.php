<?php
/**
/* Autoloader
/*
/* @param string $class - String name for the class that is trying to be load  
/* @return void
*/
function autoloader($class) {
    $class = str_replace('\\', '/', $class);
    $directory = '/../';
    $extension = '.php';    

    $fullPath = __DIR__ . $directory . $class . $extension;
    if (file_exists($fullPath)) {
        include_once $fullPath;
    }
}

spl_autoload_register('autoloader');

?>

