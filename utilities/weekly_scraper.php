<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once "helper.php";

$key = getApi();

$str = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=' . $key . "'";
$json = file_get_contents($str);

print_r($json);

exit;

