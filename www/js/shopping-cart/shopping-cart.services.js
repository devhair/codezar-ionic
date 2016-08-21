angular.module('your_app_name.shopping-cart.services', [])

.service('ShoppingCartService', function ($http, $q, $rootScope){
  this.getProducts = function(){
    return JSON.parse(window.localStorage.your_app_name_cart || '[]');
  };

  this.updatedProducts = function(products){
    window.localStorage.your_app_name_cart = JSON.stringify(products);

    $rootScope.$broadcast('cart_updated', products);
  };

  this.addProduct = function(productToAdd){
    var cart_products = !_.isUndefined(window.localStorage.your_app_name_cart) ?      JSON.parse(window.localStorage.your_app_name_cart) : [];

    //check if this product is already saved
    var existing_product = _.find(cart_products, function(product){
      return product.id == productToAdd.id;
    });

    if(!existing_product){
      cart_products.push(productToAdd);
      $rootScope.$broadcast('cart_updated', cart_products);
      $rootScope.$emit('cart_updated', cart_products);
    }

    window.localStorage.your_app_name_cart = JSON.stringify(cart_products);
  };

  this.removeProduct = function(productToRemove){
    var cart_products = JSON.parse(window.localStorage.your_app_name_cart);

    var new_cart_products = _.reject(cart_products, function(product){
      return product.id == productToRemove.id;
    });
    window.localStorage.your_app_name_cart = JSON.stringify(new_cart_products);

    $rootScope.$broadcast('cart_updated', new_cart_products);
  };


})

;
