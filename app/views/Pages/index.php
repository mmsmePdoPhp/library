<?php require_once(APPROOT . '/views/inc/header.php') ?>

<p class="pb-0 pl-3">NEW BOOKS</p>
<hr class="bg-info">
<div class="container-fluid row">


    <?php for ($i = 0; $i < 8; $i++) { ?>
        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 justify-content-between">
            <div class="card px-1">
            <div class="row">
                <div class="card col-6 h-100 my-auto px-0" style="width: 10rem;">
                    <img class="card-img-top img-fluid w-100" src="https://m.media-amazon.com/images/I/71tLAzeDwsL._AC_UY218_ML3_.jpg" alt="Card image cap">
                    <!-- <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> -->


                </div>


                <div class="card col-6 px-0" style="width: 10rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">learning laravel 6.x</li>
                        <li class="list-group-item"><i>by </i><strong>jenefer alma</strong></li>
                        <li class="list-group-item"><i>published: 2020</i></li>
                        <li class="list-group-item"><i>price:</i> 20$</li>
                        <li class="list-group-item d-flex">
                            <button class="btn btn-info btn-sm mr-auto">more</button>
                            <button class="btn btn-primary btn-sm ml-auto">download</button>
                        </li>
                    </ul>
                </div>

            </div>
            </div>
        </div>

    <?php } ?>
</div>


<?php require_once(APPROOT . '/views/inc/footer.php') ?>