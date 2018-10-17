<?php

class Pages extends Controller{
    public function __construct(){
       $this->PostModel = $this->model('Post');
    }
    public function Index($id=0){
        $posts = $this->PostModel->getPost();
       $data=array(
           'title'=>'به صفحه ی اصلی خوش آمدید!',
           'post'=>$posts
       );
        $this->view('Pages/index',$data);
        
    }
    public function about(){
        $data= array(
            'title'=> 'about page'
        );
        $this->view('Pages/about',$data);
        // $this->model('post');
    }
}
