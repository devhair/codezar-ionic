angular.module('your_app_name.account.controllers', [])

.controller('ProfileCtrl', function($scope, user, $ionicPopover, $ionicPopup, $ionicActionSheet, $state) {
  $scope.user = user;

  $scope.user_credit_cards = user.credit_cards;
  $scope.user_shipping_addresses = user.shipping_addresses;
  $scope.data = {};
  $scope.data.selected_card = user.credit_cards[0];
	$scope.data.selected_address = user.shipping_addresses[0];

  $scope.user.name = user.first_name +' '+ user.last_name;
  $scope.user.password = 'pepe123456789';
  $scope.show_new_address_button = false;
  $scope.show_new_card_button = false;
  $scope.notifications = {};
  $scope.notifications.promotions = false;
  $scope.notifications.shipment_updates = true;

  $ionicPopover.fromTemplateUrl('views/checkout/partials/address-chooser-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.addresses_popover = popover;
  });

  $ionicPopover.fromTemplateUrl('views/checkout/partials/card-chooser-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.cards_popover = popover;
  });

  $scope.openAddressesPopover = function($event){
		$scope.addresses_popover.show($event);
	};
  $scope.selectShippingAddress = function(address){
		$scope.addresses_popover.hide();
	};

  $scope.openCardsPopover = function($event){
		$scope.cards_popover.show($event);
	};
  $scope.selectCreditCard = function(card){
		$scope.cards_popover.hide();
	};

  $scope.logout = function(){
    $ionicActionSheet.show({
      titleText: 'Are you sure you want to logout?',
      destructiveText: 'Logout',
      cancelText: 'Cancel',
      cancel: function() {
        return true;
      },
      destructiveButtonClicked: function() {
        $state.go('intro.auth-login');
      }
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

.controller('OrdersCtrl', function($scope, orders, OrderService) {
  $scope.orders = orders;
})


;
