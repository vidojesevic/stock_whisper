<?php
/**
 * getApi function
 *
 * return string
 */
function getApi(): string
{
    $key = 'demo';
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $key = $_POST['key'];
    }
    return $key;
}

/**
 * getCompany function
 *
 * return string
 */
function getCompany(): string
{
    $company = 'IBM';
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $company = $_POST['company'];
    }
    return $company;
}
