angular
  .module('identifly')
  .controller('ListingsShowController', ListingsShowController);

ListingsShowController.$inject = ['$http', '$routeParams'];

function ListingsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: '/api/listings/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.listing = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });


};
