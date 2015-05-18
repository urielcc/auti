'use strict';

// Declare app level module which depends on views, and components
var autoApp = angular.module('auti', [
  'ngRoute',
  'auti.view1',
  'auti.view2',
  'auti.menu',
  'auti.alert',
]);

autoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

autoApp.controller('notifications', [
	'$scope', '$http',
	function($scope, $http) {

		console.log("Hola");

}]);
