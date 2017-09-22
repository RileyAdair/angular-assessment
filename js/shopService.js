app.service('shopService',function($http){

  this.getProducts = function(){
    return $http.get('https://practiceapi.devmountain.com/products')
  }

  this.getProductId = function(id){
    return $http.get(' https://practiceapi.devmountain.com/products/' + id)
  }

});
