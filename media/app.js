'use strict';

// Declare app level module which depends on views, and components
var autoApp = angular.module('auti', [
  'ngRoute',
  'auti.view1',
  'auti.view2',
  'auti.menu',
  'auti.alert',
  'ngToast'
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

autoApp.config(['ngToastProvider', function(ngToastProvider) {
  ngToastProvider.configure({
    additionalClasses: 'toast zoomIn orange darken-1'
  });
}]);

function Mensaje(){
	var contenido = '<a class="not-active" href="#/alert"><i class="mdi-content-add"></i> Tienes un mensaje nuevo!</a>';
	this.setContenido = function(_contenido){
		contenido = _contenido;
	};
	this.getContenido = function(){
		console.log(contenido);
		return contenido
	};
};

function Alert(){
	this.id = "1";
	this.title = "¿Tienes hambre?";
	this.type = "1";
	this.img = "foot.png";
	this.sound;
}
