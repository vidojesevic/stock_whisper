<?php
if (!isset($_POST['comp']) && empty($_POST['comp'])) {
    $comp = 'IBM';
} else {
    $comp = $_POST['comp'];
}

$json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='.$comp.'&apikey=demo');

$data = json_decode($json,true);

print_r($data);

exit;
