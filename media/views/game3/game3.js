'use strict';

angular.module('auti.game3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game3', {
    templateUrl: 'media/views/game3/game3.html',
    controller: 'game3Ctrl'
  });
}])

.controller('game3Ctrl',  ['$scope', '$http', function($scope, $http) {
	document.getElementsByTagName('body')[0].className = ' light-green lighten-3';
}]);