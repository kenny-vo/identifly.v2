angular
  .module('identifly', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/listings',
      controllerAs: 'listingsIndexCtrl',
      controller: 'ListingsIndexController'
    })
    .when('/listings', {
      templateUrl: '/templates/listings',
      controllerAs: 'listingsIndexCtrl',
      controller: 'ListingsIndexController'
    })
    .when('/login', {
      templateUrl: '/templates/login',
      controllerAs: 'loginCtrl',
      controller: 'LoginController'
    })
    .when('/create-listing', {
      templateUrl: '/templates/create-listing',
      controllerAs: 'listingsIndexCtrl',
      controller: 'ListingsIndexController'
    })
    .when('/listings/:id', {

    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
