<?php

class Links extends Controller{
    public function __construct(){
       $this->LinksModel = $this->model('Link');
    }
    public function Index($id=0){
        $Links = $this->LinksModel->getLinks();
       $data=array(
           'title'=>'Welcome to Links Page',
           'Links'=>$Links
       );
      
        $this->view('Links/index',$data);
        
    }
    public function about(){
        $data= array(
            'title'=> 'about page'
        );
        $this->view('Links/about',$data);
        // $this->model('Links');
    }
}
