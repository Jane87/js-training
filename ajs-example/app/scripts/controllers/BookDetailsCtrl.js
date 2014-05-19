'use strict';

angular.module('myApp').controller('BookDetailsCtrl', function($scope, $routeParams, $location, bookDataService) {
  var isbn = $routeParams.isbn;
  $scope.book = bookDataService.getBookByIsbn(isbn);

  $scope.goToListView = function() {
    console.log('going back to list view');
    $location.path('/books');
  };
});