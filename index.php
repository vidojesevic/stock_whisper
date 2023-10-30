<?php
require_once "autoload/autoloader.php";
require_once "config/config.php";

require_once "views/head.php";

$page = isset($_GET['page']) ? $_GET['page'] : '';

switch ($page) {
    default:
    require_once "views/navbar.php";
    require_once "views/cover.php";
    require_once "views/global.php";
    require_once "views/data.php";
    require_once "views/about.php";
    require_once "views/footer.php";
    break;
}





