<?php

class Conexao
{
    public static function conectar()
    {
        /*
            $variavel = new PDO(
                tipo:host=local; 
                dbname=nome do banco,
                usuário de acesso ao banco, 
                senha de acesso ao banco
            )
        */
        //conexão local
        $pdo = new PDO("mysql:host=localhost;
                            dbname=bdPam", 
                            "root",
                            "");
        
        //conexão on line - hospedado
        // $conexao = new PDO("mysql:host=fdb22.awardspace.net;
        //                     dbname=3178009_bdaulapdo", 
        //                     "3178009_bdaulapdo",
        //                     "VanessaAlinePw2");

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->exec("SET CHARACTER SET utf8");
        
        return $pdo;
    }
}