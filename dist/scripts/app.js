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
          })

        .state('whycsc', {
            url: '/whycsc',
            templateUrl: '/templates/whycsc.html'
          })

        .state('samples', {
            url: '/samples',
            templateUrl: '/templates/samples.html'
          })
        
        .state('order', {
            url: '/order',
            templateUrl: '/templates/order.html'
          })

        .state('contactus', {
            url: '/contactus',
            templateUrl: '/templates/contactus.html'
          });
 
        $urlRouterProvider.otherwise("/landing");
        }

    
 

 angular
     .module('safetyCard', ['ui.router'])
     .config(config);
 })();