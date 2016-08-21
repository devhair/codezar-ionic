angular.module('your_app_name.content.controllers', [])

.controller('FashionContentCtrl', function($scope, $state, $ionicPopup, $rootScope, product, ShoppingCartService, $ionicLoading) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.product = product;

  $scope.addToCart = function(product) {
		$ionicLoading.show({
			template: 'Adding to cart',
			duration: 1000
		});

		product.qty = 1;
		product.size = "M";
		product.color = "black";
  	ShoppingCartService.addProduct(product);
  };

	var colorPopup = {},
			sizePopup = {};

	$scope.chosen_color = 'Navy';
	$scope.chosen_size = 'M';

	$scope.openColorChooser = function(){
		colorPopup = $ionicPopup.show({
			cssClass: 'popup-outer color-chooser-view',
			templateUrl: 'views/content/fashion/color-chooser.html',
			scope: angular.extend($scope, {chosen_color: $scope.chosen_color}),
			title: 'Color',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};

	$scope.openSizeChooser = function(){
		sizePopup = $ionicPopup.show({
			cssClass: 'popup-outer size-chooser-view',
			templateUrl: 'views/content/fashion/size-chooser.html',
			scope: angular.extend($scope, {chosen_size: $scope.chosen_size}),
			title: 'Size',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};
})

.controller('FoodContentCtrl', function($scope, $state, $rootScope, $ionicPopup, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.product = product;

	$scope.product.selected_schedule = {
		name: "Today 12:00 pm to 12:00 am"
	};

	$scope.product.dishes = [
		{
			name:"Sanduche pull pork",
			rating: 4
		},
		{
			name:"Bahmin",
			rating: 2
		}
	];

	$scope.product.addresses = [
		{
			street: "0 Waubesa Junction",
			city: "Houston",
			state: "TX",
			postal_code: "77020",
			phone: "1-(713)471-0205",
			lat: 43.07493,
			lng: -89.381388
		},
		{
			street: "50 Northfield Way",
			city: "Brooklyn",
			state: "NY",
			postal_code: "11210",
			phone: "1-(347)846-3569",
			lat: 43.07493,
			lng: -88.381388
		}
	];

	$scope.product.selected_address = product.addresses[0];

	$scope.selectAddress = function(address){
		$scope.product.selected_address = address;
		addressPopup.close();
	};

	var schedulesPopup = {},
			addressPopup = {};

	$scope.openSchedules = function(){
		schedulesPopup = $ionicPopup.show({
			cssClass: 'popup-outer food-schedules-view',
			templateUrl: 'views/content/food/schedules.html',
			scope: angular.extend($scope, {}),
			title: 'More info',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};

	$scope.openAddresses = function(){
		addressPopup = $ionicPopup.show({
			cssClass: 'popup-outer food-addresses-view',
			templateUrl: 'views/content/food/addresses.html',
			scope: angular.extend($scope, {addresses: $scope.product.addresses, selected_address: $scope.product.selected_address}),
			title: 'Addresses',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};

	$scope.$on('mapInitialized', function(event, map) {
		// If we want to access the map in the future
		$scope.map = map;
	});
})

.controller('TravelContentCtrl', function($scope, $state, $rootScope, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.product = product;
})

.controller('DealsContentCtrl', function($scope, $state, $rootScope, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.product = product;
})

.controller('RealStateContentCtrl', function($scope, $state, $rootScope, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.product = product;
})




;
