'use strict';

angular.module('auti.uploadAlert', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload-alert', {
    templateUrl: 'upload.html',
    controller: 'uploadCtrl'
  });
}])

.controller('uploadCtrl', ['$scope', '$http',function($scope, $http) {
    $scope.state = 0;
	$scope.register = function() {
        var form = document.getElementById('form-content');
        var elements = form.getElementsByClassName('form-control');
        var validationSuccess = true;
        for (var i = 0; i < elements.length; i++) {
            console.log(elements[i], validate(elements[i]));

            if(!validate(elements[i]) && validationSuccess){
                validationSuccess = false;
            }
        };

        if(validationSuccess){
            $scope.state = 1;
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
                $scope.state = 2;
            })
            .error(function(data, status, headers, config) {
              $scope.state = 3;      
            });
        }
    };
}]);