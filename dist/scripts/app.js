 (function() {
     function config($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider
         .html5Mode({
            enabled: true,
            requireBase: false
         });

        $stateProvider
          .state('landing', {
             url: '/landing',
             templateUrl: '/templates/landing.html'
          });
 
        $urlRouterProvider.otherwise("/landing");
        }

    
 

 angular
     .module('safetyCard', ['ui.router'])
     .config(config);
 })();