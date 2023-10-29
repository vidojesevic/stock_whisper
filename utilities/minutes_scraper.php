<?php
$key = "K3NZ87N8SI74FZNA"; 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if (!isset($_POST['selectedValue']) || empty($_POST['selectedValue'])) {
    $time = 5;
} else {
    $time = $_POST['selectedValue'];
}
// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=' . $time . 'min&apikey=' . $key . "'";
$str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval='.$time.'min&apikey='.$key."'";
// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval='. $time .'min&apikey=' . $key . "'";

$json = file_get_contents($str);

echo $json;

