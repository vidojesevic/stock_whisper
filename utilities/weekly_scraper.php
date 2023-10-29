<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo');

print_r($json);

exit;

