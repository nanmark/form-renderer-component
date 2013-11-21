'use strict';
//TODO: all dependencies should be aggregated into a seperate module
var App = angular.module('formRendererApp', ['ngRoute','formRendererDemo','miscConstants','formRenderer', 'ui.tinymce', '$strap.directives']);

App.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/form-renderer-demo.html',
        controller: 'DemoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
