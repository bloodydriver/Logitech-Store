<?php
	header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS'); 
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  
                            
	$serve = "localhost";
    $name = "root";
    $password = "123456";
    $mysql = "logite";
    
    $con = new mysqli($serve, $name, $password, $mysql);

    $phone = $_POST["phone"];
    $pass = $_POST["password"];
    
    $search = "select telphone from user where telphone='$phone';"; 
    $txt = $con->query($search);

    $insert = "insert into user(password, telphone) values ('$pass','$phone')";

    if ($txt -> num_rows > 0) {
        echo "<script>localStorage.setItem('registStatus','registed');window.location='register.html';</script>";
    } 
    if ($txt -> num_rows == 0 and $con->query($insert)===true) {
        echo "<script>localStorage.setItem('userStatus','userOK'); window.location='login.html';</script>";
    } else {
        echo "<script>window.location='register.html';</script>";
    }
    $con->close();
?>
