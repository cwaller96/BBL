<?php
$allowed = false;
$ip = $_SERVER['REMOTE_ADDR'];
$access_list = file("temp_access.txt", FILE_IGNORE_NEW_LINES);

if ($access_list !== false) {
    foreach ($access_list as $entry) {
        list($allowed_ip, $expiry) = explode("|", $entry);
        if ($ip === $allowed_ip && time() < $expiry) {
            $allowed = true;
            break;
        }
    }
}

if (!$allowed) {
    header("Location: access_denied.html");
    exit();
}

// If allowed, continue with the rest of the page logic
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome to the restricted area!</h1>
    <p>Your IP has been approved and you have access.</p>
</body>
</html>
