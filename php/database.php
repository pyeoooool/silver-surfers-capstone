<?php
// Database credentials
$host = "localhost";
$dbname = "silversurfers_db";
$username = "root";
$password = "";

// Create a new connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
