<?php 

    header("content-Type:application/json;charset=utf-8");
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Credentials:true");

    $con = new mysqli('localhost', 'root', 'root', 'logite');


    // 判断是否链接成功
    if($con->connect_error) {
        die('连接失败');
    };
    // echo '连接成功';

    $select = "select * from logitech_shop";

    $select = $con->query($select);
    
    while($article=$select->fetch_assoc()) {
        $arr[] = $article;
    }
    echo json_encode($arr);
    
?>