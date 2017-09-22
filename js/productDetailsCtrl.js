app.controller('productDetailsCtrl', function($scope, shopService, $stateParams) {


    $scope.getProductById = function($stateParams){
        shopService.getProductById($stateParams).then(response => {
            $scope.product = response.data;
        });
    }

    $scope.getProductById();

});
