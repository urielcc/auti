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
       audio = new Audio('/media/audio/saludo.mp3');
       audio.play();
       audio.addEventListener('ended', onFinish);
       audio.addEventListener('error', function(error){ onFinish(); });
  };
  playAudio("tienes", function(){});

  $scope.sendAnswer = function(answer){
    document.getElementById('alert').className = 'row animated slideOutDown';
    setTimeout(function(){
      location.href='#/';
    },250);
  };


});