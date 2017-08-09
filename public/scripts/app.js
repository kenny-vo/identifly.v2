angular
  .module('identifly', [
    'ngRoute',
    'satellizer'
  ])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/listings',
      controller: 'ListingsIndexController',
      controllerAs: 'listingsIndexCtrl'
    })
    .when('/', {
      templateUrl: '/templates/home',
      controller: 'ListingsIndexController',
      controllerAs: 'listingsIndexCtrl'
    })
    .when('/listings', {
      templateUrl: '/templates/listings',
      controller: 'ListingsIndexController',
      controllerAs: 'listingsIndexCtrl'
    })
    .when('/listings/:id', {
      templateUrl: '/templates/listings-show',
      controller: 'ListingsShowController',
      controllerAs: 'listingsShowCtrl'
    })
    .when("/login", {
        controller: "AuthController",
        templateUrl: "/templates/login"
    })
    .when("/register", {
        controller: "AuthController",
        templateUrl: "/templates/signup"
    })
    .when('/create-listing', {
      templateUrl: '/templates/create-listing',
      controller: 'ListingsIndexController',
      controllerAs: 'listingsIndexCtrl'
    })
    .otherwise({
          redirectTo: "/"
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
