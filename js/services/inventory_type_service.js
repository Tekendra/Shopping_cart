angular.module('app').service('inventory_type_service',['$http', function($http){
    
    
    this.inventoryTypes ='Hello World';
    var obj = this;
    
    $http.get('/service/inventoryType').then(function(response){
        console.log("logging just the response");
        console.log("End of response");
        
        obj.inventoryTypes = response.data;
        console.log(obj.inventoryTypes);
    });
    
    this.inventory ='Hello world';
    var obj =this;
    
    
    
    this.getInventoryList = function(id){
        //var inventory = "";
        $http.get('/service/inventoryType/'+id+'/inventory').then(function(response){
            console.log("logging just the response");
            console.log("End of response");

            obj.inventory = response.data;
            console.log(obj.inventory);
        });
       // return inventory;
    }
}]);