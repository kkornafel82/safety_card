(function() {
   function OrderCtrl($scope, Orders) {   
     window.scope = $scope;
     $scope.all = Orders.all;

     $scope.addOrder = function (){
        Orders.all.$add({order: $scope.order, createdAt: Firebase.ServerValue.TIMESTAMP});
        console.log($scope.order);
        $scope.order = "";
     }

     

}
   angular
       .module('safetyCard')
       .controller('OrderCtrl',["$scope","Orders", OrderCtrl]);
})();