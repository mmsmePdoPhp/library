new Vue({
    el: '#app',
    data: {
        expandDropdownLeft: false,
        expandDropdownRight: false,
        message: 'hi',
        topNavbarCollapsed: false
    },
    methods: {
        toggleDropDownLeft() {
            this.expandDropdownLeft = !this.expandDropdownLeft;
        },
        toggleDropDownRight() {
            this.expandDropdownRight = !this.expandDropdownRight;
        },
        toggleNavbarCollapse() {
            this.topNavbarCollapsed = !this.topNavbarCollapsed;
        }
    },
    created() {
        axios.get('http://localhost/library/pages/about')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                console.log('always executed')
            });
    },
});