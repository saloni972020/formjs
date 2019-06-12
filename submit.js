var app = angular.module('helloworld');

app.controller('OtherCtrl', ['$scope', 'FormService', function($scope, FormService) {
  $scope.formVal = FormService.serviceSubmit2();
}]);