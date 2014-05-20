'use strict';

angular.module('myApp').controller('NewBookCtrl', function($scope) {
  $scope.saveBook = function(book) {
    console.log('Saving book', book);
  }
});