angular.module('ourApp', ['ngRoute'], ['ui.bootstrap'])
  .config(function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'views/view1.html',
      controller: 'view1controller'
    })
    .when('/view2', {
      templateUrl: 'views/view2.html',
      controller: 'view2controller'
    })
    .otherwise('/view1');
  });
