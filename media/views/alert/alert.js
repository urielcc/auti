'use strict';

angular.module('auti.alert', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alert', {
    templateUrl: 'views/alert/alert.html',
    controller: 'alertCtrl'
  });
}])

.controller('alertCtrl', function($scope, $http, $global) {
  document.getElementsByTagName('body')[0].className = 'red lighten-3';
	var audio = null;
	var playAudio = function(text, onFinish){
       audio = new Audio('http://translate.google.com/translate_tts?tl=es&q=' + encodeURIComponent(text));
       audio.play();
       audio.addEventListener('ended', onFinish);
       audio.addEventListener('error', function(error){ onFinish(); });
  };
  playAudio("tienes hambre?", function(){});
  
  $scope.hola ="1";
  $scope.sendAnswer = function(answer){
    document.getElementById('alert').className = 'row animated slideOutUp';
    setTimeout(function(){
      location.href='#/';
    },250);
  };

});