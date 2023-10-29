<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if (isset($_POST['minutes'])) {
    echo 'selected';
} else {
    echo "nothing is selected\n";
}
$json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo');

print_r($json);

exit;

