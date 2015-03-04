'use strict';

/* App Module */

var gogglePalApp = angular.module('gogglePalApp', [
  'ngRoute',
  'gogglePalControllers',
  'gogglePalServices'
]);

gogglePalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/blog', {
        templateUrl: 'partials/blog.html',
        controller: 'BlogCtrl'
      }).
      when('/blog/:blogId', {
        templateUrl: 'partials/blog-detail.html',
        controller: 'BlogDetailCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
