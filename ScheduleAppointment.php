<?php
$servername = "localhost";
$username = "YOUR_USERNAME";
$password = "YOUR_PASSWORD";
$dbname = "elrdaas";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$studentName = $_POST["studentName"];
$appointmentDate = $_POST["appointmentDate"];
$appointmentTime = $_POST["appointmentTime"];
$service = $_POST["service"];
$loads = $_POST["loads"];

// Generate appointment ID
$appointmentId = "LA-" . uniqid();

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO appointments (appointment_id, status, student_name, created_date, appointment_time, service, loads) VALUES (?, 'Confirmed', ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssi", $appointmentId, $studentName, $appointmentDate, $appointmentTime, $service, $loads);

// Execute SQL statement
if ($stmt->execute()) {
    $response = array("success" => true);
} else {
    $response = array("success" => false);
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>
