'use strict';

angular.module('auti.alert', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alert', {
    templateUrl: '/media/views/alert/alert.html',
    controller: 'alertCtrl'
  });
}])

.controller('alertCtrl', function($scope, $http, $global) {

  $scope.alert = $global.get("alert");

  document.getElementsByTagName('body')[0].className = 'red lighten-3';
	var audio = null;
	var playAudio = function(text, onFinish){
    console.log($scope.alert);
       audio = new Audio('/media/audio/'+$scope.alert.sound);
       audio.play();
       audio.addEventListener('ended', onFinish);
       audio.addEventListener('error', function(error){ onFinish(); });
  };
  playAudio("tienes", function(){});

  $scope.sendAnswer = function(_answer){
    $http({
            method  : 'POST',
            url     : '/api/answer/', 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken' : CSRF_TOKEN
          },
            data: {answer : _answer}
        })
        .success(function(data) {
            console.log(data);
            if(data.statusCode === 0){
              document.getElementById('alert').className = 'row animated slideOutDown';
              setTimeout(function(){
                location.href='#/';
              },250);
            }else{
              
            }

        })
        .error(function(data, status, headers, config) {
           
      });
  };


});