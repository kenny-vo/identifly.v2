angular
  .module('identifly', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateURL: '/templates/listings',
      controllerAs: 'listingsIndexCtrl',
      controller: 'ListingsIndexController'
    })
    .when('/listings', {
      templateURL: '/templates/listings',
      controllerAs: 'listingsIndexCtrl',
      controller: 'ListingsIndexController'
    })
    .when('/listings/:id', {
      templateURL: '/templates/listings-show',
      controllerAs: 'listingsShowCtrl',
      controller: 'ListingsShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
