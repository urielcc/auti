'use strict';

angular.module('auti.game2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game2', {
    templateUrl: 'media/views/game2/game2.html',
    controller: 'game2Ctrl'
  });
}])

.controller('game2Ctrl',  ['$scope', '$http', function($scope, $http) {
	document.getElementsByTagName('body')[0].className = ' deep-purple lighten-3';
}]);