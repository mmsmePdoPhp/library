<?php
class Post{
    public function __construct(){
        echo 'post is loaded <br >';
    }
    public function Index($id){
        echo $id;
    }
    public function about($id){
        echo $id+2;
    }
}
