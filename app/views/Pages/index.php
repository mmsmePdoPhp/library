<?php require_once (APPROOT.'/views/inc/header.php') ?>
<h1><?php echo $data['title']; ?></h1>
<h4>Users in site:</h4>
<ul>
    
        <?php
        foreach($data['post'] as $post){
            echo '<li>'.$post->name.'</li>' ;
        }
        ?>
    
</ul>
<?php require_once (APPROOT.'/views/inc/footer.php') ?>


