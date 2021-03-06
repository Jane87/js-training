'use strict';

angular.module('myApp').config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/route/root.html',
    controller: 'RootCtrl'
  }).when('/books', {
    templateUrl: 'templates/route/bookListTemplate.html',
    controller: 'BookListCtrl'
  }).when('/newbook', {
    templateUrl: 'templates/route/newBookTemplate.html',
    controller: 'NewBookCtrl'
  }).when('/books/:isbn', {
    templateUrl: 'templates/route/bookDetailsTemplate.html',
    controller: 'BookDetailsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
