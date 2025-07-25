<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (php_sapi_name() !== 'cli') {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $ip = $_SERVER["REMOTE_ADDR"];
        $timestamp = date("Y-m-d H:i:s");
        
        $request = "$timestamp|$ip|$name\n";
        
        if (file_put_contents("access_requests.txt", $request, FILE_APPEND) === false) {
            error_log("Failed to write to access_requests.txt");
            echo "An error occurred while submitting your request. Please try again later.";
        } else {
            echo "Your access request has been submitted. An administrator will review your request soon.";
        }
    } else {
        header("Location: access_denied.html");
        exit();
    }
} else {
    echo "This script must be run via a web server.";
    exit();
}
?>
