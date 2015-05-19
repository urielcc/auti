'use strict';

angular.module('auti.alert', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alert', {
    templateUrl: 'views/alert/alert.html',
    controller: 'alertCtrl'
  });
}])

.controller('alertCtrl',  [function() {

}]);