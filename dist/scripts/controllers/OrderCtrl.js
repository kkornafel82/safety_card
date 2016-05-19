(function() {
   function OrderCtrl($scope, Orders) {   
     window.scope = $scope;
     $scope.all = Orders.all;

     $scope.addOrder = function (){
        console.log($scope.orderName);
        Orders.all.$add({name: $scope.orderName, createdAt: Firebase.ServerValue.TIMESTAMP});
        $scope.orderName = "";
     }

}
   angular
       .module('safetyCard')
       .controller('OrderCtrl',["$scope","Orders", OrderCtrl]);
})();