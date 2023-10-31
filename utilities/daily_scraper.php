<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once "helper.php";
$key = getApi();
$company = getCompany();

$str = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' . $company . '&apikey=' . $key;
$json = file_get_contents($str);

echo $json;

exit;
