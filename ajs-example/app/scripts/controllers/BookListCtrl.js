'use strict';

angular.module('myApp').controller('BookListCtrl', function($scope, bookDataService) {
  $scope.books = bookDataService.getAllBooks();
});
