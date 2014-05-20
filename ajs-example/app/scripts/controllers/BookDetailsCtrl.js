'use strict';

angular.module('myApp').controller('BookDetailsCtrl', function($scope, $routeParams, $location, bookDataService) {
  var isbn = $routeParams.isbn;
  bookDataService.getBookByIsbn(isbn).then(function(response) {
    $scope.book = response.data;
  });

  $scope.goToListView = function() {
    console.log('going back to list view');
    $location.path('/books');
  };
});