var app = angular.module('helloworld');


  app.controller('MainCtrl',['$scope','$state','$timeout','$rootScope', 'FormService' ,function($scope, $state,$timeout, $rootScope, FormService) {
    $scope.selectOptions = ["Male",
                            "Female"
                
    ];
  

  $scope.choices = [{"id": 1,"type":"Male","name":"", "profile":"", "mail":""}, 
  {"id": 2,"type":"Male","name":"", "profile":"", "mail":""} ];
                   
  $scope.index=$scope.choices.length
  console.log($scope.index)
  
  
  $scope.addNewChoice = function() {
    
    var newItemNo = ++$scope.index 
    
    $scope.choices.push({'id':newItemNo, "type":"Male","name":"","profile":"", "mail":"" });
    
   

    
    
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
  $scope.OnSubmit = function(isValid){
    console.log(isValid)
    $scope.submitted=true;
    console.log($scope.submitted)
    if(isValid){
    
    FormService.serviceSubmit($scope.choices);
    alert("successs")
$state.go('submit')
    }
    else{
     
      return;
    }  
} 
 
}])
