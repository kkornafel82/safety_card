(function() {
   function OrderCtrl($scope, Orders, Upload) {   
     window.scope = $scope;
     $scope.all = Orders.all;

     $scope.addOrder = function (){
        Upload.base64DataUrl($scope.picFile).then(function(urls){
          $scope.image = urls[0];
          var order = {order: $scope.order, dataUrl: urls[0], createdAt: Firebase.ServerValue.TIMESTAMP};
          Orders.all.$add(order);
          console.log(order);
          $scope.order = "";
        });
     }

     

}
   angular
       .module('safetyCard')
       .controller('OrderCtrl',["$scope","Orders", "Upload", OrderCtrl]);
})();
