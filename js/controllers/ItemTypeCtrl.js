angular.module('app').controller('ItemTypeCtrl',['$scope','inventory_service',
                                function($scope, inventory_service){
                     
                            
                            $scope.inventoryTypes ="";                                    
                             $scope.$watch(function(){
                                    return inventory_service.inventoryTypes;
                                },function(newVal, oldVal){
                                    if(oldVal != newVal){
//                                        
                                        $scope.inventoryTypes= newVal;
                                        
                                    }                                    
                                }); 
                                    
                        
                            $scope.inventory="";
                                $scope.$watch(function(){
                                    return inventory_service.inventory;
                                },function(newVal, oldVal){
                                    if(oldVal != newVal){
                                        $scope.inventory = newVal;
                                        
                                    }
                                });
                                   
                            
                            $scope.$watch(function(){
                                return inventory_service.inventoryTypesId},
                                          function(newVal, oldVal){
                                                if(oldVal !=newVal)
                                                    {
                                                        $scope.inventoryTypesId = newVal;
                                                    }
                            
                            });
                                    
                            $scope.inventoryItem =function(id){
                                inventory_service.id = id;
                                    inventory_service.getId();
                                inventory_service.id = id;
                                    inventory_service.getInventoryTypeIds();
                            }
                                    
                                    
                            
                           
                         
    
}]);
