angular.module('your_app_name.feed.controllers', [])

.controller('FeedCtrl', function($scope,  $ionicScrollDelegate, ShoppingCartService) {
	$scope.getProductsInCart = function(){
		return ShoppingCartService.getProducts().length;
	};
})

.controller('FashionCtrl', function($scope, $stateParams, products) {
	$scope.filters = $stateParams.filters;

	$scope.products = products;
})

.controller('FoodCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('TravelCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('DealsCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('RealStateCtrl', function($scope, products) {
	$scope.products = products;
})

;
