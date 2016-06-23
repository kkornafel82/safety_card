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
      
      $scope.handleStripe = function(status, response){
        if(response.error) {
          // there was an error. Fix it.
        } else {
          debugger
          var form = angular.element(document.querySelector('form[stripe-form]'))
         // Get the token ID: 
          var token = response.id; 
         // Insert the token into the form so it gets submitted to the server: 
          form.append(angular.element('<input type="hidden" name="stripeToken" />').val(token)); 
         // Submit the form: 
          form[0].submit();        }
        }

     

}
   angular
       .module('safetyCard')
       .controller('OrderCtrl',["$scope","Orders", "Upload", OrderCtrl]);
})();
