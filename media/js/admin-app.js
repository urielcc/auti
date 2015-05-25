'use strict';

var autiAdmin = angular.module('auti', [
  'ngRoute',
  'auti.adminIndex',
  'auti.uploadAlert',
  'auti.sendAlert',
  'auti.checkAnswers'
]);

autiAdmin.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/upload-alert'});
}]);

autiAdmin.controller('notifications', [
	'$scope', '$http', function($scope, $http) {
}]);

autiAdmin.service('$global', function () {
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


function validate(element) {
    var name = element.getAttribute("data-form");
    var value = element.value;
    var parent = element.parentNode;
    var validateField = true;

    switch (name) {
        case 'title':
        if (value.length <= 0 || value.length > 30)
            validateField = addErrorMessage(parent, "Descripción incorrecta");
        else
            removeErrorMessage(parent);
        break;
        case 'imagen':
        	console.log(value);
            //if(value.length != 0 || value)
            validateField = validateFile(element)
            if(validateField)
                removeErrorMessage(parent);
        break;
    }
    return validateField;
}

function validateFile(element){
        var isValid;
        var filePath = element.value;
        var errorMessage = "";
        if(filePath == ''){
            isValid = false;
            errorMessage = "No se ha seleccionado imagen";
        }
        else{
            var extension = filePath.substring(
                    filePath.lastIndexOf('.') + 1).toLowerCase();
            if (extension == "gif" || extension == "png" || extension == "jpeg" 
                || extension == "jpg") {
                var bytesSize = element.files[0].size;
                var fileSize = bytesToSize(bytesSize)
                if(fileSize.unitId <= 2 && fileSize.size < 1.5){
                    isValid = true;
                }
                else{
                    isValid = false;
                    errorMessage = "La imagen tiene que ser menor a 1.5 MB";
                }
            }
            else{
                isValid = false;
                errorMessage = "El archivo tiene que tener formato de imagen";
            }
        }
        if(isValid)
            removeErrorMessage(element.parentNode);
        else
            addErrorMessage(element.parentNode, errorMessage);
        return isValid;
}

function addErrorMessage(element, message) {
    var errorElement = element.getElementsByClassName("validate-error");
    if (errorElement.length == 0) {
        var newDiv = document.createElement("span");
        newDiv.className = "validate-error";
        newDiv.innerHTML = message;
        element.appendChild(newDiv);
        element.className += " has-error";
    }
    return false;
}

function removeErrorMessage(element) {
    element.className = element.className.replace(" has-error", "");
    var errorElement = element.getElementsByClassName("validate-error");
    if (errorElement.length > 0) {
        element.removeChild(errorElement[0]);
    }
    else
        return 0;
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    var file = {size:0, unitId:0};
    if (i == 0) return file = {size:bytes, unitId:i};
    return file = {size:parseFloat((bytes / Math.pow(1024, 2)).toFixed(1)), unitId:i};
};
