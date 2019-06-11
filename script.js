var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
    
  var helloState = {
    name: 'form',
    url: '/form',
    templateUrl: 'form.html'
  }

  var aboutState = {
    name: 'home',
    url: '/home',
    template: '<h3>you are at home</h3>'
  }
  var submitState={
    name: 'submit',
    url: '/submit',
    templateUrl: 'submit.html'   
  }
  $stateProvider.state(submitState);
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});