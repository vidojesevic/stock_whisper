<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// if (!isset($_POST['comp']) && empty($_POST['comp'])) {
//     $comp = 'IBM';
// } else {
//     $comp = $_POST['comp'];
// }

$json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo');
// $json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='.$comp.'&apikey=demo');


print_r($json);

exit;
