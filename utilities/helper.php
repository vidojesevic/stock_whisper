<?php
/**
 * getApi function
 *
 * return string
 */
function getApi(): string
{
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['key']) && !empty($_POST['key'])) {
            $key = $_POST['key'];
            return $key;
        }
    } else {
        $key = 'demo';
        return $key;
    }
}

/**
 * getCompany function
 *
 * return string
 */
function getCompany(): string
{
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['company']) && !empty($_POST['company'])) {
            $company = $_POST['company'];
            return $company;
        }
    }
    $company = 'IBM';
    return $company;
}
