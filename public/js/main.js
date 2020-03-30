new Vue({
    el:'#app',
    data:{
        expandDropdownLeft:false,
        expandDropdownRight:false,
        message:'hi',
        topNavbarCollapsed:false
    },
    methods: {
        toggleDropDownLeft(){
            this.expandDropdownLeft = !this.expandDropdownLeft;
        },
        toggleDropDownRight(){
            this.expandDropdownRight = !this.expandDropdownRight;
        },
        toggleNavbarCollapse(){
            this.topNavbarCollapsed = ! this.topNavbarCollapsed;
        }
    },
});