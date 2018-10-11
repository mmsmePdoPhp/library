<?php
class Database{

    private $host = DB_HOST;
    private $dbname = DB_NAME;
    private $user = DB_USER;
    private $pass = DB_PASS;

    private $dbh;
    private $smt;
    private $error;
    
    public function __construct(){
        $options = array(

        );
        //set DSN
        $dsn = "mysql:host=$this->host;dbname=$this->dbname";

        //create db instance
        try{
        $this->dbh = new PDO($dsn,$this->user,$this->pass,$options);

        }catch(PDOException $e){
            $this->error = $e->getMessage();
            echo $this->error;
        }

    }

    //prepare statement with query
    public function query($sql){
        $this->smt = $this->dbh->prepare($sql);
    }

    public function bind($param, $value, $type = null){
        if(is_null($type)){
            switch(true){
            
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;    
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default :
                    $type = PDO::PARAM_STR;                   
            }
        }

        $this->smt->bindValue($param, $value , $type);
    }

    //execute the prepare statement
    public function execute(){
        return $this->smt->execute();
    }

    //Get result as array of object
    public function resultSet(){
        $this->execute();
        return $this->smt->fetchAll(PDO::FETCH_OBJ);
    }
    
    //Get single record as object
    public function single(){
        $this->execute();
        return $this->fetch(PDO::FETCH_OBJ);
    }
}