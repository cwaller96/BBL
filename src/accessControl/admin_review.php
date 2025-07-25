<?php
ini_set('session.save_path', '/tmp'); // Set session save path
session_start();

echo "Session ID: " . session_id() . "<br>";
print_r($_SESSION);
echo "Session Save Path: " . ini_get('session.save_path') . "<br>";

// Basic authentication (replace with more secure method in production)
if (!isset($_SESSION['admin']) && (!isset($_POST['password']) || $_POST['password'] !== '61u3432!')) {
    if (isset($_POST['password'])) {
        echo "Password received: " . htmlspecialchars($_POST['password']) . "<br>";
        if ($_POST['password'] !== '61u3432!') {
            echo "Incorrect password.<br>";
        } else {
            echo "Password correct. Setting admin session.<br>";
            $_SESSION['admin'] = true;
        }
    }
    ?>
    <form method="post">
        <input type="password" name="password" required>
        <input type="submit" value="Login">
    </form>
    <?php
    exit();
} else {
    echo "Session admin is set to true.<br>";
    $_SESSION['admin'] = true;
}

// Check if an approval action has been taken
if (isset($_POST['approve'])) {
    $approved_ip = $_POST['approve'];
    $temp_access = "$approved_ip|" . (time() + 600) . "\n"; // 10 minutes from now

    // Attempt to write the approved IP to the temp_access.txt file
    if (file_put_contents("temp_access.txt", $temp_access, FILE_APPEND) === false) {
        echo "Failed to write to temp_access.txt. Please check file permissions.<br>";
    } else {
        echo "Access granted for IP: $approved_ip<br>";
    }
}

// Read and display the access requests
$requests = file("access_requests.txt", FILE_IGNORE_NEW_LINES);
if ($requests !== false) {
    foreach ($requests as $request) {
        $fields = explode("|", $request);

        // Ensure all required fields exist
        $timestamp = $fields[0] ?? 'Unknown';
        $ip = $fields[1] ?? 'Unknown';
        $name = $fields[2] ?? 'Unknown';
        $email = $fields[3] ?? 'Unknown';
        $reason = $fields[4] ?? 'Unknown';

        echo "<p>Time: $timestamp<br>IP: $ip<br>Name: $name<br>Email: $email<br>Reason: $reason</p>";
        echo "<form method='post'><input type='hidden' name='approve' value='$ip'><input type='submit' value='Approve'></form>";
        echo "<hr>";
    }
} else {
    echo "Failed to read access_requests.txt. Please check file permissions.<br>";
}
?>
