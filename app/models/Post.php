<?php

class Post extends Database{

    public function getPost(){
        $sql = "SELECT * FROM users";
        $this->query($sql);
        return $this->resultSet();
    }
}