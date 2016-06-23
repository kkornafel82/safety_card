(function() {
   function PayCtrl($scope) {   
     window.scope = $scope;
    
     $scope.handleStripe = function(status, response){
        if(response.error) {
          // there was an error. Fix it.
        } else {
          // got stripe token, now charge it or smt
          token = response.id
        };
    }

   angular
       .module('safetyCard')
       .controller('PayCtrl',['angularPayments', OrderCtrl]);
})();
