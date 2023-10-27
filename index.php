<?php
require_once "autoload/autoloader.php";
require_once "config/config.php";

require_once "views/head.php";

$page = isset($_GET['page']) ? $_GET['page'] : '';

switch ($page) {
    default:
    // $home = new HomeController();
    // $home->index();
    require_once "views/navbar.php";
    require_once "views/cover.php";
    require_once "views/data.php";
    require_once "views/about.php";
    require_once "views/footer.php";
    break;
    // http_response_code(404);
    // include '../resources/views/layouts/404.php';
}





