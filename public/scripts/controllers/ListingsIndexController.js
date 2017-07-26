angular
  .module('identifly')
  .controller('ListingsIndexController', ListingsIndexController);

ListingsIndexController.$inject = ['$http'];

function ListingsIndexController ($http) {
  var vm = this;
  vm.newListing = {};
  vm.newListing = {
    topic: "Test",
    description: "Test",
    budget: "Test",
    location: "Test",
    req1: "Test",
    req2: "Test",
    req3: "Test",
    date: "Test",
    date_req: "Test"
  };

  vm.listings = [
    {
      topic: "Test",
      description: "Test",
      budget: "Test",
      location: "Test",
      req1: "Test",
      req2: "Test",
      req3: "Test",
      date: "Test",
      date_req: "Test"
    },
    {
      topic: "Test",
      description: "Test",
      budget: "Test",
      location: "Test",
      req1: "Test",
      req2: "Test",
      req3: "Test",
      date: "Test",
      date_req: "Test"
    }
  ];

  $http({
    method: 'GET',
    url: '/api/listings'
  }).then(function successCallback(response) {
    vm.listings = response.data;
  }, function errorCallback(response) {
    console.log('Error getting data', response);
  });

  vm.createListing = function (){
    $http({
      method: 'POST',
      url: '/api/listings',
      data: vm.newListing,
    }).then(function successCallback(response) {
      vm.listings.push(response.data);
    }, function errorCallback(response) {
      console.log('Error posting data', response);
    });
  }
};
