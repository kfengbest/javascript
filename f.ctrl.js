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
    }];
});
