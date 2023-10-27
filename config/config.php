<?php
session_start();

$envFile = __DIR__."/../.env";
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines) {
        foreach($lines as $line) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

$GLOBALS['config'] = [
    'mysql' => [
        'host'      => $_ENV['DB_HOST'],
        'username'  => $_ENV['DB_USERNAME'],
        'password'  => $_ENV['DB_PASSWORD'],
        'db'        => $_ENV['DB_DATABASE']
    ],
    'API' => [
        'key'       => $_ENV['API_KEY'],
    ],
    'remember' => [
        'cookie_name'      => 'hash',
        'cookie_expiry' => 604800
    ],
    'session' => [
        'session_name' => 'user',
        'token_name'   => 'token'
    ]
];

