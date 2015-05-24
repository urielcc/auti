'use strict';

angular.module('auti.uploadAlert', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload-alert', {
    templateUrl: 'upload.html',
    controller: 'adminCtrl'
  });
}])

.controller('adminCtrl', ['$scope', '$http',function($scope, $http) {
	$scope.register = function() {
        var form = document.getElementById('form-content');
        
        var datos = new FormData(form);
         
        
            $http({
                method  : form.getAttribute("method"),
                url     : '/api/newAlert/',
                data    : datos,
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(data) {
                console.log(data);
                
            })
            .error(function(data, status, headers, config) {
                    
            });
        
    };
}]);