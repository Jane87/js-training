'use strict';

angular.module('myApp').factory('bookDataService', function($q) {

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
    return $q.when({
      data: angular.copy(books)
    });
  }

  function getBookByIsbn(isbn) {
    var filtered = books.filter(function(b) {
      return b.isbn == isbn;
    });

    return $q.when({
      data: filtered[0]
    });
  }

  function saveBook(book) {
    books.push(book);

    return $q.when(books.length);
  }

  return {
    getAllBooks: function() {
      return getAllBooks();
    },
    getBookByIsbn: function(isbn) {
      return getBookByIsbn(isbn);
    },
    saveBook: function(book) {
      return saveBook(book);
    }
  };

});
