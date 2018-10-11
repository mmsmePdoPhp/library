<?php
  /*
   * App Core Class
   * Creates URL & loads core controller
   * URL FORMAT - /controller/method/params
   */
  class Core {
    protected $currentController = 'Pages';
    protected $currentMethod = 'Index';
    protected $params = [];

    public function __construct(){
      
      $url = $this->getUrl();
      if(isset($url) && !empty($url))
      if(file_exists('../app/controllers/'.ucwords($url[0]).'.php')){
        //if controller exist
        $this->currentController = ucwords($url[0]);
        //unset zero indexes
        unset($url[0]);
      }
      //require controller file
      require_once "../app/controllers/$this->currentController.php";
      //instantiate from controller class
      $this->currentController = new $this->currentController;

      //get mthod
      if(isset($url[1])){
        if(method_exists($this->currentController,$url[1])){
          $this->currentMethod= ucwords($url[1]);
          //unset 1 index url
          unset($url[1]);
        }
      }

      //get params
      $this->params = $url ? array_values($url) : [] ;
      

      //call a callback with an array
      call_user_func_array(array($this->currentController,$this->currentMethod),$this->params);
      

    }
     
    public function getUrl(){
      if(isset($_GET['url'])){
        $url = rtrim($_GET['url'], '/');
        $url = filter_var($url, FILTER_SANITIZE_URL);
        $url = explode('/', $url);
        return $url;
      }
    }
    } 


  
  