"use strict";

angular.module('myApp').controller('ColorPickerCtrl', function($scope) {
    $scope.onColorChange = function(r,g,b) {
        console.log('color has changed',r,g,b);
    };
});