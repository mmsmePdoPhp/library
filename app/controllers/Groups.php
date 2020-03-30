<?php

class Groups extends Controller{
    public function __construct(){
       $this->PostModel = $this->model('Group');
    }

    public function Index($id=0){
        $groups = $this->PostModel->getGroups();
       $data=array(
           'groups'=>$groups
       );
        $this->view('Search/group',$data);
    }

    public function about(){
        $data= array(
            'title'=> 'about page'
        );
        $this->view('Pages/about',$data);
    }
}
