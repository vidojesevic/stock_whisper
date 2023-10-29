<?php
$key = "K3NZ87N8SI74FZNA"; 

$company = ['IBM' => 'IBM', 'AAPL' => 'Apple INC', 'MSFT' => 'Microsoft Corp'];

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// $comp = 'MSFT';
// $name = 'Microsoft Corp';
$time = 30;

// foreach ($company as $comp => $name) {
// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=' . $time . 'min&apikey=' . $key . "'";
//
// this is the one
// $str = file_get_contents('https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=' . $comp . '&apikey=' . $key . "'";
//
// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
if (!isset($_POST['comp']) && empty($_POST['comp'])) {
    $comp = 'IBM';
} else {
    $comp = $_POST['comp'];
}

// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=' . $time . 'min&apikey=' . $key . "'";
$str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=5min&apikey=demo';

$json = file_get_contents($str);

$data = json_decode($json,true);

echo $json;

// // daily
// $json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo');
// // daily adjasted
// $json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo');
// // time serius weekly
// $json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo');
// // time serius weekly adjasted
// $json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo');
// // monthly
// $json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo');
// // monthly adjasted
// $json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=demo');
// // quote endpoint
// $json = file_get_contents('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo');
// // search 
// $json = file_get_contents('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo');
// // Globa Market
// $json = file_get_contents('https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo');
