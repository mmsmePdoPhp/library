<?php
//require config file
require_once('config/config.php');

//autoleader for require library files
spl_autoload_register(function($className){
    require_once 'libraries/'.$className.'.php';

})


?>