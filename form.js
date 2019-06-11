var app = angular.module('helloworld');


  app.controller('MainCtrl',['$scope','$state','$timeout','$rootScope' ,function($scope, $state,$timeout, UserService, $rootScope) {
    $scope.selectOptions = ["Male",
                            "Female"
                
    ];

  $scope.choices = [{"id": 1,"type":"Male","name":"", "profile":"", "mail":""}, 
                    ];
                    $scope.callToAddTodataList = function(choices){
                      UserService.addUser(choices);
                  };
  
  $scope.index = $scope.choices.length;
  
  
  $scope.addNewChoice = function($rootScope) {
    var newItemNo = ++$scope.index;
    $rootScope.choices.push({'id':newItemNo, "type":"Male","name":"","profile":"", "mail":"" });
    
   

    
    
  };
  
    
  $scope.removeChoice = function(id) {
  
        if($scope.choices.length<=1){
            alert("input cannot be less than 1");
            return;
        }
  
  
        var index = -1;
    		var comArr = $scope.choices ;
    		for( var i = 0; i < comArr.length; i++ ) {
    			if( comArr[i].id === id) {
    				index = i;
    				break;
    			}
    		}
    		if( index === -1 ) {
    			alert( "Something gone wrong" );
    		}
    		$scope.choices.splice( index, 1 );
  };
  $scope.OnSubmit = function(){
 console.log($scope.choices)  
$state.go('submit')
  } 
 
}]);
// app.controller('CartController', function($scope, UserService) {
//   $scope.user = UserService.getUser();
//   console.log($scope.user)
// });
// app.service('myservice', function($scope) {
//   console.log($scope.choices)
        

// app.factory('choice', function(){
//   return { profile: '' };
// });

// app.controller('FirstCtrl', function( $scope,  ){
// $scope.Data = Data;
// });

// app.controller('SecondCtrl', function( $scope, Data ){
// $scope.Data = Data;
// });
// app.factory('UserService', function() {
//   var dataList = [];

//   // var addUser = function() {
//   //     return choices;
//   // };

//   var getUser = function($rootScope){
//       return $rootScope.choices;
//   };

//   return {
//     // addUser: addUser,
//     getUser: getUser
//   };

// });
