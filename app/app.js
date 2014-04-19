var bcrApp = angular.module('bcrApp', []);

bcrApp.controller('SessionsCtrl', function SessionsCtrl($scope, sessionApi) {
  sessionApi.getAll().then(function(response) {
    $scope.sessions = response.data;
  });
});

bcrApp.factory('sessionApi', function sessionApi($http) {
  var api = {
    getAll: function() {
      return $http.get('/data/sessions.json');
    }
  };

  return api;
});
