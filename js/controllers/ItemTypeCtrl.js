angular.module('app').controller('ItemTypeCtrl',['$scope','inventory_type_service',
                                function($scope, inventory_type_service){
                                $scope.inventoryTypes ="";
                                $scope.inventoryItem ="";
                                
                                
//                                console.log("From Controller");
//                                console.log(inventory_type_service.inventoryTypes);
                                    
                                $scope.$watch(function(){
                                    return inventory_type_service.inventoryTypes;
                                },function(newVal, oldVal){
                                    if(oldVal != newVal){
//                                        console.log("FROM watch list");
//                                        console.log('New val');
//                                        console.log(newVal);
//                                        console.log('old val');
//                                        console.log(oldVal);
                                        $scope.inventoryTypes= newVal;
                                        
                                    }                                    
                                }); 
                                   
                                    $scope.$watch(function(){
                                        return inventory_type_service.inventoryItem;
                                    }, function(newVal, oldVal){
                                        if(oldVal != newVal){
                                            $scope.invetoryItem = newVal;
                                        }
                                    })
                                    
                                    
                                    $scope.inventoryItem = function(id){
                                
                                  var x= inventory_type_service.getInventoryList(id);
                                    console.log(x);
                                    alert(x);
                                } 
    
}]);
