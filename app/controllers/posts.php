<?php
class Posts extends Controller{
    
    public function __construct()
    {
        echo 'your page is loaded.<br >';
    }

    public function Index(){
        $obj = $this->model('Idea');
        $data = $obj->getinfo();
        $this->view('Pages/Idea',$data);
    }
}