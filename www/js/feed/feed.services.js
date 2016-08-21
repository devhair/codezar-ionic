angular.module('your_app_name.feed.services', [])

.service('FashionService', function ($http, $q){
  this.getProducts = function(){
    var dfd = $q.defer();
    $http.get('fashion_db.json').success(function(database) {
      dfd.resolve(database.products);
    });
    return dfd.promise;
  };

  this.getProduct = function(productId){
    var dfd = $q.defer();
    var service = this;

    $http.get('fashion_db.json').success(function(database) {
      var product = _.find(database.products, function(product){
        return product.id == productId;
      });

      service.getRelatedProducts(product).then(function(related_products){
        product.related_products = related_products;
      }, function(error){
        console.log("ups", error);
      });

      dfd.resolve(product);
    });
    return dfd.promise;
  };

  this.getRelatedProducts = function(product){
    var dfd = $q.defer();

    $http.get('fashion_db.json').success(function(database) {
      //add product data to this order
      var related_products = _.map(product.related_products, function(product){
        return _.find(database.products, function(p){ return p.id == product.id; });
      });
      dfd.resolve(related_products);
    });

    return dfd.promise;
  };
})

.service('FoodService', function ($http, $q){
  this.getProducts = function(){
    var dfd = $q.defer();
    $http.get('food_db.json').success(function(database) {
      dfd.resolve(database.products);
    });
    return dfd.promise;
  };

  this.getProduct = function(productId){
    var dfd = $q.defer();
    $http.get('food_db.json').success(function(database) {
      var product = _.find(database.products, function(product){
        return product.id == productId;
      });
      dfd.resolve(product);
    });
    return dfd.promise;
  };
})

.service('DealsService', function ($http, $q){
  this.getProducts = function(){
    var dfd = $q.defer();
    $http.get('deals_db.json').success(function(database) {
      dfd.resolve(database.products);
    });
    return dfd.promise;
  };

  this.getProduct = function(productId){
    var dfd = $q.defer();
    $http.get('deals_db.json').success(function(database) {
      var product = _.find(database.products, function(product){ return product.id == productId; });
      dfd.resolve(product);
    });
    return dfd.promise;
  };
})
.service('TravelService', function ($http, $q){
  this.getProducts = function(){
    var dfd = $q.defer();
    $http.get('travel_db.json').success(function(database) {
      dfd.resolve(database.products);
    });
    return dfd.promise;
  };

  this.getProduct = function(productId){
    var dfd = $q.defer();
    $http.get('travel_db.json').success(function(database) {
      var product = _.find(database.products, function(product){
        return product.id == productId;
      });
      dfd.resolve(product);
    });
    return dfd.promise;
  };
})

.service('RealStateService', function ($http, $q){
  this.getProducts = function(){
    var dfd = $q.defer();
    $http.get('real_state_db.json').success(function(database) {
      dfd.resolve(database.products);
    });
    return dfd.promise;
  };

  this.getProduct = function(productId){
    var dfd = $q.defer();
    $http.get('real_state_db.json').success(function(database) {
      var product = _.find(database.products, function(product){
        return product.id == productId;
      });
      dfd.resolve(product);
    });
    return dfd.promise;
  };
})
;
