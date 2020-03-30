<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0" id="navbar">
    <a class="navbar-brand mx-0 col-2   col-md-1 order-0 order-lg-0 " href="#">
        <i class="fas fa-book"></i>
    </a>
    <div class="row   m-auto col-8 col-md-5 col-lg-4 bg-info p-0 order-1 order-lg-2">

        <form class="h-100 m-sm-0 my-lg-0 w-100">
            <div class="input-group mb-3 my-auto">
                <input type="text" class="form-control" @keyDown.prevent.enter="appendSelect" v-model="groupValue" type="search" list="search" name="search" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <datalist id="search">
                    <option v-for="group in groupLists" @click="appendSelect" :data-id="group.id" :value="group.name" :key="group.id">
                </datalist>
                <div class="input-group-append">
                    <span class="input-group-text btn" @click="appendSelect"  id="basic-addon2">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
            </div>
        </form>
    </div>

    <button class="navbar-toggler col-2 order-2 order-lg-1" :class="{'collapsed':topNavbarCollapsed}" @click="toggleNavbarCollapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" :aria-expanded="topNavbarCollapsed" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse order-3 order-lg-1 text-center row" :class="{'show':topNavbarCollapsed}" id="navbarSupportedContent">


        <ul class="navbar-nav m-auto m-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown" :class="{'show': expandDropdownLeft}">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLeft" @click="toggleDropDownLeft" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="expandDropdownLeft">
                    Dropdown
                </a>

                <div class="dropdown-menu" :class="{'show': expandDropdownLeft}" aria-labelledby="navbarDropdownLeft">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>

        <ul class="navbar-nav m-auto m-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown" :class="{'show': expandDropdownRight}">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownRight" @click="toggleDropDownRight" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="expandDropdownRight">
                    Dropdown
                </a>

                <div class="dropdown-menu" :class="{'show': expandDropdownRight}" aria-labelledby="navbarDropdownRight">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
    </div>
</nav>
<div class="container-fluid py-2">
    <div class="row bg-light py-1">
        <div class="col4">
            <span class="mr-1 text-primary px-1 py-1" v-for="select in selected">{{select}} <span class="p-1 text-danger pt-0 pr-0" @click="removeSelected">x</span></span>
        </div>
    </div>
</div>
