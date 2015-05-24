'use strict';

var autiAdmin = angular.module('auti', [
  'ngRoute',
  'auti.adminIndex'
]);

autiAdmin.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

autiAdmin.controller('notifications', [
	'$scope', '$http', function($scope, $http) {
}]);

autiAdmin.service('$global', function () {
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
