'use strict';

angular.module('auti.game1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game1', {
    templateUrl: 'media/views/game1/game1.html',
    controller: 'game1Ctrl'
  });
}])

.controller('game1Ctrl',  ['$scope', '$http', function($scope, $http) {
	document.getElementsByTagName('body')[0].className = ' light-green lighten-3';
}]);