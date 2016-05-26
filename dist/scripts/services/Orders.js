(function() {
  function Orders($firebaseArray) {
    var ref = new Firebase("safetycard.firebaseIO.com/orders");

    var orders = $firebaseArray(ref);

    return {
      all: orders,
      
    };
  }

  angular
    .module('safetyCard')
    .factory('Orders', ['$firebaseArray', Orders]);
})();

