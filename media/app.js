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
	'$scope', '$http', function($scope, $http) {
}]);
autoApp.service('$global', function () {
	var _values = { };
    this.values = _values;
    return {
		get: function (value) {
			return _values[value];
	    },
		add: function(name, value){
			_values[name] = value;
	    }
	};
});

