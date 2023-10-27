<?php

$key = "K3NZ87N8SI74FZNA"; 

$company = ['IBM' => 'IBM', 'AAPL' => 'Apple INC', 'MSFT' => 'Microsoft Corp'];

$file = "data/data.php";
// $arr = array();

foreach ($company as $comp => $name) {
    $str = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' . $comp . '&interval=' . $time . 'min&apikey=' . $key . "'";
    $json = file_get_contents($str);

    $data = json_decode($json,true);

    echo "<h2>This is data for {$name}</h2>";
    // $arr = [$comp => $name, "data" => $data];
    fopet($file, 'a');

    fwrite($file, $data);

    fclose($file);
    // echo "<pre>";
    // print_r($data);
    // echo "</pre>";
}

exit;

