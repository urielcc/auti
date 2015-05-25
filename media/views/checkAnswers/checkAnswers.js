'use strict';

angular.module('auti.checkAnswers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {
    templateUrl: '/media/views/checkAnswers/checkAnswers.html',
    controller: 'reportCtrl'
  });
}])

.controller('reportCtrl', ['$scope', '$http',function($scope, $http) {
	
	$scope.respuestas = new Array();


  $scope.respuestasDisponibles = function(){
    $http({
            method  : 'POST',
            url     : '/api/checkAnswers/', 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken' : CSRF_TOKEN
          },
            data: {}
        })
        .success(function(data) {
            console.log(data);
            $scope.respuestas = data;
            $scope.tid = setTimeout($scope.respuestasDisponibles, 10000);
        })
        .error(function(data, status, headers, config) {
           
        });
  };

  $scope.respuestasDisponibles();
}]);