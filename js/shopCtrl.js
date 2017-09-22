app.controller('shopCtrl', function($scope, shopService) {

  shopService.getProducts()
  .then(response => {
    $scope.products = response.data;
    console.log(response.data);
  })
});
