'use strict';

angular.module('auti.adminIndex', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/media/views/adminIndex/adminIndex.html',
    controller: 'adminCtrl'
  });
}])

.controller('adminCtrl', [function() {
	console.log("hola");
}]);