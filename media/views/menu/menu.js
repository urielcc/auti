'use strict';

angular.module('auti.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/menu/menu.html',
    controller: 'menuCtrl'
  });
}])

.controller('menuCtrl', [function() {
	console.log("Menu");
}]);