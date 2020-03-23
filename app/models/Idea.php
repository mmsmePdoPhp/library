<?php
class Idea extends Database{

    public function getinfo(){
        
        $this->query("SELECT * FROM info");
        return $this->resultSet();
    }
}