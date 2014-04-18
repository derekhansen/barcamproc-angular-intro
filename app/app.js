var bcrApp = angular.module('bcrApp', []);

bcrApp.controller('SessionsCtrl', function SessionsCtrl($scope) {
  $scope.sessions = [
    {
      "id": 0,
      "name": "Keynote"
    },
    {
      "id": 1,
      "name": "Intro to Angular"
    }
  ];
});
