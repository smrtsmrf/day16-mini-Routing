angular.module('miniRouting').controller('productsCtrl', ['$scope', '$stateParams', 'productService', function ($scope,$stateParams, productService) {
	// $scope.productData = $stateParams.id === 'socks' ? 
	// 	 productService.sockData : productService.shoesData;
	if ($stateParams.id === 'shoes') {
        $scope.productData = productService.shoeData;
    }
    else if ($stateParams.id === 'socks') {
        $scope.productData = productService.sockData;
    }
}])