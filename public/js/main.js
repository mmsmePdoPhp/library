new Vue({
    el: '#app',
    data: {
        expandDropdownLeft: false,
        expandDropdownRight: false,
        message: 'hi',
        topNavbarCollapsed: false,
        groupLists:null,
        groupValue:null,
        selected:[]
    },
    methods: {
        toggleDropDownLeft: function() {
            this.expandDropdownLeft = !this.expandDropdownLeft;
        },
        toggleDropDownRight: function() {
            this.expandDropdownRight = !this.expandDropdownRight;
        },
        toggleNavbarCollapse: function() {
            this.topNavbarCollapsed = !this.topNavbarCollapsed;
        },
        getListGroups: function(){
            var n=this;
            axios.get('http://localhost/library/groups/index',{responseType:JSON})

            .then(function (response) {
                // handle success
                n.groupLists=response.data;
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // console.log('always executed')
            });
        },
        appendSelect: function(){
            // if(this.selected.indexOf(this.groupValue))
                // console.log(this.selected.indexOf(this.groupValue))
            this.selected.push(this.groupValue);
        },
        removeSelected: function(){

        }
    
        
    },
    created() {
        this.getListGroups()  
    },
    mounted: function() {
        // this.getListGroups()
        
    },
});