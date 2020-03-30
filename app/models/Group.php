<?php
class Group{
    private $db;

    public function __construct(){
      $this->db = new Database;
    }

    public function getGroups(){
        $this->db->query(" SELECT * FROM grouplist");
        return $this->db->resultSet();
    }
}