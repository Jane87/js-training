'use strict';


describe('Service: bookDataService', function() {

  var $rootScope, bookDataService;

  // Test Suite for the bookDataService

  beforeEach(module('myApp'));

  beforeEach(inject(function(_$rootScope_, _bookDataService_) {
    bookDataService = _bookDataService_;
    $rootScope = _$rootScope_;
  }));

  describe('Duck typing', function() {
    it('should contain a getAllBooks() function', function() {
      expect(angular.isFunction(bookDataService.getAllBooks)).toBe(true);
    });

    it('should contain a getBookByIsbn() function', function() {
      expect(angular.isFunction(bookDataService.getBookByIsbn)).toBe(true);
    });

    it('should contain a saveBook() function', function() {
      expect(angular.isFunction(bookDataService.saveBook)).toBe(true);
    });
  });

  describe('saveBook()', function() {

    it('should properly save a book object', function() {
      var bookCountBefore, bookCountAfter;

      bookDataService.getAllBooks().then(function(response) {
        bookCountBefore = response.data.length;
      });

      // resolve the promise synchronously
      $rootScope.$apply();

      var book = {
        title: 'TEST'
      };

      bookDataService.saveBook(book);
      $rootScope.$apply();

      bookDataService.getAllBooks().then(function(response) {
        bookCountAfter = response.data.length;
      });

      $rootScope.$apply();

      expect(bookCountAfter).toBe(bookCountBefore + 1);

    });

  });


});