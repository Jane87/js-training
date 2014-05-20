'use strict';

angular.module('myApp').controller('BookListCtrl', function($scope, bookDataService) {
  bookDataService.getAllBooks().then(function(response) {
    $scope.books = response.data;
  });
});
