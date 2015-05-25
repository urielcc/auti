'use strict';

angular.module('auti.mensaje', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/message', {
    templateUrl: '/media/views/mensaje/mensaje.html',
    controller: 'mensajeCtrl'
  });
}])

.controller('mensajeCtrl', ['$scope', '$http',function($scope, $http) {
	document.getElementsByTagName('body')[0].className = 'amber lighten-3';

  $scope.mensaje = function(msj){
    $http({
            method  : 'POST',
            url     : '/api/message/', 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken' : CSRF_TOKEN
          },
            data: {title:msj, answer: true}
        })
        .success(function(data) {
            document.location.href ="#/";
            
        })
        .error(function(data, status, headers, config) {
           document.location.href ="#/";
        });
  };

}]);