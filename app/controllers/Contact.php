<?php
class Contact extends Controller{
    public function Index(){
        $data=array(
            'name'=>'php'
        );
        $this->view('Pages/Contact',$data);
    }
}