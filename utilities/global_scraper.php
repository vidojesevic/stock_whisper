<?php
$json = file_get_contents('https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo');

// $data = json_decode($json,true);
print_r($json);

// print_r($data);

exit;
