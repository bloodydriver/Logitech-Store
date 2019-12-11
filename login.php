<?php
	header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');  
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  
	$con = new mysqli("localhost","root","123456","logite");
	$select="select * from logitech_shop;";
	$test=$con->query($select);
	while($arr=$test->fetch_assoc()) {
		$array[] = $arr;
	};
	// print_r($array);
	echo json_encode($array);
?>