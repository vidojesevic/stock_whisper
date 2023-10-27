<?php
$key = "K3NZ87N8SI74FZNA"; 

$company = ['IBM' => 'IBM', 'AAPL' => 'Apple INC', 'MSFT' => 'Microsoft Corp'];

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$comp = 'MSFT';
$name = 'Microsoft Corp';
$time = 30;

// foreach ($company as $comp => $name) {
// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=' . $time . 'min&apikey=' . $key . "'";
//
// this is the one
// $str = file_get_contents('https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=' . $comp . '&apikey=' . $key . "'";
//
// $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
$str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';

$json = file_get_contents($str);

$data = json_decode($json,true);

// print_r($data);
// }
echo $json;

// $companyData = $data['Time Series (5min)'];
// $dates = array_keys($companyData);
// $opens = array_column($companyData, '1. open');
// $highes = array_column($companyData, '2. high');
// $lows = array_column($companyData, '3. low');
// $closes = array_column($companyData, '4. close');
// $volumes = array_column($companyData, '5. volume');
//
// require_once "jpgraph-4.4.2/src/jpgraph.php";
// require_once "jpgraph-4.4.2/src/jpgraph_line.php";
//
// $graph = new Graph(800,600);
// $graph->title->Set('Stock Prices for ' . $name);
// // $graph->xaxis->title->Set('Date');
// // $graph->yaxis->title->Set('Price');
//
// $lineplot = new LinePlot($closes, $dates);
// $lineplot->SetColor('blue');
// $lineplot->SetLegend('Closing Price');
//
// $graph->Add($lineplot);
// $graph->Stroke();
//
// $graph->Stroke();

exit;

