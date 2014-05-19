'use strict';

angular.module('myApp').factory('bookDataService', function() {

  var books = [
    {
      title: 'AngularJS Cookbook',
      subtitle: '80 Recipes for AngularJS 1.2',
      author: 'pt',
      numPages: 250,
      isbn: '123-456-789'
    },
    {
      title: 'Effective JavaScript',
      subtitle: 'Be a better JS developer!',
      author: 'abc',
      numPages: 170,
      isbn: '987-654-321'
    },
    {
      title: 'CoffeeScript in Action',
      subtitle: 'JS for coffee people',
      author: 'foo',
      numPages: 300,
      isbn: '111-222-333'
    }
  ];

  function getAllBooks() {
    return angular.copy(books);
  }

  function getBookByIsbn(isbn) {
    var filtered = books.filter(function(b) {
      return b.isbn == isbn;
    });

    return filtered[0];
  }

  return {
    getAllBooks: function() {
      return getAllBooks();
    },
    getBookByIsbn: function(isbn) {
      return getBookByIsbn(isbn);
    }
  };

});
