'use strict';


angular.module('myApp').controller('RootCtrl', function($scope, $interval) {

  $scope.now = new Date();

  $interval(function() {
    $scope.now = new Date();
  }, 1000);

});