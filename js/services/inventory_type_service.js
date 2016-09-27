angular.module('app').service('inventory_service',['$http', function($http){
    
    
    this.inventoryTypes ='Hello World';
    var obj = this;
    
    $http.get('/service/inventoryType').then(function(response){
        console.log("logging just the response");
        console.log("End of response");
        
        obj.inventoryTypes = response.data;
        console.log(obj.inventoryTypes);
    });
    
    
    this.id = null;
    var obj = this;
    this.getId = function(){
        $http.get('/service/inventoryType/' + obj.id).then(function(response){
            obj.id = response.data;
            console.log(obj.id);
        });
    }
    
    
    
    this.inventory ='';
    var obj =this;   
        //var inventory = "";
   
        $http.get('/service/inventory').then(function(response){
            console.log("logging  from service/inventory");
            console.log("End of response");

            obj.inventory = response.data;
            console.log(obj.inventory);
        });
       // return inventory;
    
    
    
    this.inventoryTypesId = null;
    var obj = this;
    this.getInventoryTypeIds =function(){
        var url ='/service/inventory/'+obj.inventoryTypesId;
     $http.get(url).then(function(response){
        console.log("logging just the response");
        console.log("End of response");
        
        obj.inventoryTypesId = response.data;
        console.log(obj.inventoryTypesId);
    });
    }
    
   
    
    
}]);