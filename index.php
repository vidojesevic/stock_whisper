<?php
require_once "autoload/autoloader.php";
require_once "config/config.php";

require_once "views/head.php";
require_once "utilities/helper.php";
require_once "views/navbar.php";
// echo getApi();
// echo getCompany();

$page = isset($_GET['page']) ? $_GET['page'] : '';

switch ($page) {
    case "login":
        require_once "views/login.php";
        break;
    default:
    require_once "views/cover.php";
    require_once "views/global.php";
    require_once "views/data.php";
    require_once "views/about.php";
    break;
}

require_once "views/footer.php";
