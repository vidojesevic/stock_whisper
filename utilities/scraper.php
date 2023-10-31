<?php
// $key = "K3NZ87N8SI74FZNA"; 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once "helper.php";

$comp = getCompany();
$key = getApi();
// $comp = 'IBM';
// $key = 'demo';

// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
$str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=5min&apikey=' . $key;

$json = file_get_contents($str);

echo $json;
