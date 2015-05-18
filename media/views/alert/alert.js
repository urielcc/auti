'use strict';

angular.module('auti.alert', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alert', {
    templateUrl: 'views/alert/alert.html',
    controller: 'alertCtrl'
  });
}])

.controller('alertCtrl', [function() {
	var audio = null;
	var playAudio = function(text, onFinish){
       audio = new Audio('http://translate.google.com/translate_tts?tl=es&q=' + encodeURIComponent(text));
       audio.play();
       audio.addEventListener('ended', onFinish);
       audio.addEventListener('error', function(error){ onFinish(); });
    };
    playAudio("tienes hambre?", function(){
       //isPlaying = false;
    });
}]);