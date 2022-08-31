<?php
    header("Access-Control-Allow-Origin: *");

    include("conexao.php");
    
    $pdo = Conexao::conectar();
    $stmt = $pdo->prepare("select * from product");	
    $stmt ->execute();

    $data = array();
    while($row = $stmt ->fetch(PDO::FETCH_ASSOC)){        
        $data[] = $row;                   					
    }	

    $tudo = json_encode($data);

    echo $tudo;
?>