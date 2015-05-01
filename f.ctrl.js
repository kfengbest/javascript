angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.shows = [{
    	title: 'game of thrones',
    	year: 2001,
    	favorite: true
    },
    {
    	title: 'walking dead',
    	year: 2011,
    	favorite: false
    },
    {
    	title: 'gold age',
    	year: 2011,
    	favorite: true
    }];

    vm.orders = [
    {
    	id : 1,
    	title : 'year asending',
    	key : 'year',
    	reverse : false
    },
    {
    	id : 2,
    	title : 'year desending',
    	key : 'year',
    	reverse : true
    },
    {
    	id : 3,
    	title : 'title asending',
    	key : 'title',
    	reverse : false
    },
    {
    	id : 4,
    	title : 'title desending',
    	key : 'title',
    	reverse : true
    }
    ];
    vm.order = vm.orders[0];
});
