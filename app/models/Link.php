<?php
class Link{
    private $db;

    public function __construct(){
      $this->db = new Database;
    }

    public function getLinks(){
        $this->db->query(" SELECT alinks.id as aid,alinks.alinks_id as a_id, alinks.name as aname, alinks.href as ahref, nlink.id as nid,nlink.alinks_id as n_id, nlink.name as nname, nlink.href as nhref from alinks left JOIN alinks as nlink on alinks.id = nlink.alinks_id WHERE alinks.`alinks_id` is null ");
        return $this->db->resultSet();
    }
}