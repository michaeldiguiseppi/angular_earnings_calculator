// sample angular code

var app = angular.module('myApp', ['ngRoutes']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/details', {
      templateUrl: 'partials/details.html',
      controller: 'detailsCtrl',
    })
    .when('/charges', {
      templateUrl: 'partials/charges.html',
      controller: 'chargesCtrl',
    })
    .when('/earnings', {
      templateUrl: 'partials/earnings.html',
      controller: 'earningsCtrl',
    })
    .otherwise('/details');
  $locationProvider.html5Mode(true);
});
