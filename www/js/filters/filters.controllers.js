angular.module('your_app_name.filters.controllers', [])

.controller('FiltersCtrl', function($scope, $state, $rootScope, $ionicSlideBoxDelegate) {

	$scope.category_filter = 'Fashion';

	$scope.tags_filter = {};
	$scope.tags_filter.vegetables = true;
	$scope.tags_filter.asian = true;

	$scope.color_filter = '#c284e5';

	$scope.size_filter = 'M';

	$scope.ingredients_filter = {};
	$scope.ingredients_filter.butter = true;
	$scope.ingredients_filter.lemon = true;

	$scope.show_filter = 'Bars';

	$scope.budget_filter = '$';

	$scope.distance_filter = 30;

	$scope.bedrooms_filter = 3;
	$scope.bathroom_filter = 1;

	$scope.price_filter = {
		from: 144,
		to: 523
	};
	$scope.price_filter_range = {
		min: 0,
		max: 800
	};

	$scope.cancelRefine = function(){
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.applyRefine = function(){
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.lockSlide = function () {
    $ionicSlideBoxDelegate.$getByHandle('filter-tabs-slider').enableSlide(false);
  };
})

;
