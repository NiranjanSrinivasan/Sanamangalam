<?php
//Get values from form

$username = $_POST['user'];
$password = $_POST['pass'];
$dbservername = "localhost";
$dbusername = "root";
$dbpassword = "";
$database = "avs";
//To prevent mysql injection

//$username = stripcslashes($username);
//$password = stripcslashes($password);
//$username = mysqli_real_escape_string($username);
//$password = mysqli_real_escape_string($password);

//connect to the server and select database

$aVar=mysqli_connect($dbservername,$dbusername,$dbpassword,$database);
//mysqli_select_db($database);

// Query the database for user

$result = mysqli_query($aVar,"select * from login_users where username = '".$username."' and password = '".$password."'");
$row = mysqli_fetch_array($result);
if($row['username']== $username && $row['password'] == $password)
{
	header("Location:main.html");
}        
else{
	echo " Failed to login";
}

?>