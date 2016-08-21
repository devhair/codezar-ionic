angular.module('your_app_name.checkout.controllers', [])

.controller('CheckoutCtrl', function($scope, $state, $rootScope, products, CheckoutService) {

	$scope.products = products;
	var tax = 0.07;

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

	$scope.cancel = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.getSelectedAddress = function() {
		return CheckoutService.getUserSelectedAddress().street;
	};

	$scope.getSelectedCard = function() {
		return CheckoutService.getUserSelectedCard().number;
	};

})

.controller('CheckoutAddressCtrl', function($scope, $state, $rootScope, $ionicPopover, user_shipping_addresses, $ionicLoading, $ionicPopup, CheckoutService) {
	$ionicPopover.fromTemplateUrl('views/checkout/partials/address-chooser-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.addresses_popover = popover;
  });

	$scope.cancel = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.billing_same_as_shipping_address = true;
	$scope.user_shipping_addresses = user_shipping_addresses;
	$scope.data = {};
	$scope.data.selected_address = {};
	$scope.show_new_address_button = true;

	$scope.selectShippingAddress = function(address){
		$scope.addresses_popover.hide();
	};

	$scope.saveSelectedAddress = function(address){
		CheckoutService.saveUserSelectedAddress(address);
		$scope.cancel();
	};

	$scope.openAddressesPopover = function($event){
		console.log("opening addresses popover");
		$scope.addresses_popover.show($event);
	};

	$scope.deleteShippingAddress = function(address){
		//do something and then close popup
	};

	$scope.addShippingAddress = function(address){
			//do something and then close popup
	};

	$scope.editShippingAddress = function(address){
			//do something and then close popup
	};

  $scope.showNewAddressPopup = function() {
    var newAddressPopup = $ionicPopup.show({
      cssClass: 'popup-outer new-shipping-address-view',
      templateUrl: 'views/checkout/partials/new-shipping-address-popup.html',
      title: 'New Address',
      scope: $scope,
      buttons: [
        { text: 'Close' },
        {
          text: 'Add',
          onTap: function(e) {
            // return $scope.data;
          }
        }
      ]
    });
    newAddressPopup.then(function(res) {
      if(res)
      {
				console.log('hacer algo cuando apreta ADD con los datos llenos')
      }
      else {}
    });
  };

  $scope.showEditAddressPopup = function(address) {
		$scope.address = address;

    var editAddressPopup = $ionicPopup.show({
      cssClass: 'popup-outer edit-shipping-address-view',
      templateUrl: 'views/checkout/partials/edit-shipping-address-popup.html',
      title: address.street,
      scope: $scope,
      buttons: [
        { text: 'Close' },
        {
          text: 'Delete',
					// type: 'icon-left ion-trash-a delete-button',
					type: 'delete-button',
          onTap: function(e) {
            // return $scope.data;
          }
        },
        {
          text: 'Edit',
          onTap: function(e) {
            // return $scope.data;
          }
        }
      ]
    });
    editAddressPopup.then(function(res) {
      if(res)
      {
				console.log('hacer algo cuando apreta ADD con los datos llenos')
      }
      else {}
    });
  };
})

.controller('CheckoutCardCtrl', function($scope, $state, $rootScope, $ionicPopover, user_credit_cards, $ionicLoading, $ionicPopup, CheckoutService) {

	$ionicPopover.fromTemplateUrl('views/checkout/partials/card-chooser-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.cards_popover = popover;
  });

	$scope.cancel = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.user_credit_cards = user_credit_cards;
	$scope.data = {};
	$scope.data.selected_card = {};
	$scope.show_new_card_button = true;

	$scope.selectCreditCard = function(card){
		$scope.cards_popover.hide();
	};

	$scope.saveSelectedCreditCard = function(card){
		CheckoutService.saveUserSelectedCard(card);
		$scope.cancel();
	};

	$scope.openCardsPopover = function($event){
		console.log("opening cards popover");
		$scope.cards_popover.show($event);
	};

	$scope.deleteCreditCard = function(card){
		//do something and then close popup
	}

	$scope.addCreditCard = function(card){
			//do something and then close popup
	}

	$scope.editCreditCard = function(card){
			//do something and then close popup
	}

  $scope.showNewCardPopup = function() {
    var newCardPopup = $ionicPopup.show({
      cssClass: 'popup-outer new-card-view',
      templateUrl: 'views/checkout/partials/new-card-popup.html',
      title: 'New Card',
      scope: $scope,
      buttons: [
        { text: 'Close' },
        {
          text: 'Add',
          onTap: function(e) {
            // return $scope.data;
          }
        }
      ]
    });
    newCardPopup.then(function(res) {
      if(res)
      {
				console.log('hacer algo cuando apreta ADD con los datos llenos')
      }
      else {}
    });
  };

  $scope.showEditCardPopup = function(card) {
		$scope.card = card;

    var editCardPopup = $ionicPopup.show({
      cssClass: 'popup-outer edit-card-view',
      templateUrl: 'views/checkout/partials/edit-card-popup.html',
      title: '**** ' + card.number.slice(-4),
      scope: $scope,
      buttons: [
        { text: 'Close' },
				{
          text: 'Delete',
					// type: 'icon-left ion-trash-a delete-button',
					type: 'delete-button',
          onTap: function(e) {
            // return $scope.data;
          }
        },
        {
          text: 'Edit',
          onTap: function(e) {
            // return $scope.data;
          }
        }
      ]
    });
    editCardPopup.then(function(res) {
      if(res)
      {
				console.log('hacer algo cuando apreta ADD con los datos llenos')
      }
      else {}
    });
  };
})

.controller('CheckoutPromoCodeCtrl', function($scope) {

})


;
