<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

require_once "helper.php";

$comp = getCompany();
$key = getApi();
// $comp = 'MSFT';

$str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=5min&apikey=' . $key;

$json = file_get_contents($str);

echo $json;
