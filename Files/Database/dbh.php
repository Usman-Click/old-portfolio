<?php

$servername = "localhost";
$dbusername = "root";
$dbpwd = "DANbera1";
$dbname = "portfolio";


$con =  mysqli_connect($dbhost, $dbusername, $dbpwd, $dbname);

if (!$con) {
    die('connection failed:'.mysqli_connect_error());
}

