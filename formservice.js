var myApp = angular.module('helloworld');
myApp.service('FormService', function() {
  var returnObj = {
    returnVal: ''
  };
  this.serviceSubmit = function serviceSubmit(inputVal) {
    returnObj.returnVal = inputVal;
  }
  this.serviceSubmit2 = function serviceSubmit2() {
    return returnObj.returnVal;
  }
});