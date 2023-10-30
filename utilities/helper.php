<?php
/**
 * getApi function
 *
 * return string
 */
function getApi(): string
{
    if (!isset($_POST['apikeysub']) && empty($_POST['apikey'])) {
        $key = 'demo';
    } else {
        $key = $_POST['apikey'];
    }
    return $key;
}
