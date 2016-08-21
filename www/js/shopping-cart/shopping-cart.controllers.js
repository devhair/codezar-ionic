angular.module('your_app_name.shopping-cart.controllers', [])

.controller('ShoppingCartCtrl', function($scope, $state, $rootScope, $ionicActionSheet, products, ShoppingCartService) {

	$scope.products = products;
	var tax = 0.07;

	$scope.$on('cart_updated', function(event, cart_products) {
    $scope.products = cart_products;
  });


	$scope.close = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.removeFromCart = function(product) {
		$ionicActionSheet.show({
			titleText: 'Remove product from Shopping Cart',
			destructiveText: 'Remove from cart',
			cancelText: 'Cancel',
			cancel: function() {
				return true;
			},
			destructiveButtonClicked: function() {
				ShoppingCartService.removeProduct(product);
				return true;
			}
		});
	};

	//update product quantities
	$scope.$watch('subtotal', function() {
		var updatedProducts = $scope.products;
		ShoppingCartService.updatedProducts(updatedProducts);
	});


	$scope.getSubtotal = function() {
		$scope.subtotal = _.reduce($scope.products, function(memo, product){
			return memo + (product.price * product.qty);
		}, 0);

		return $scope.subtotal;
	};

	$scope.getTax = function() {
		$scope.tax = $scope.subtotal * tax;
		return $scope.tax;
	};

	$scope.getTotal = function() {
		return $scope.subtotal + $scope.tax;
	};
})


;
