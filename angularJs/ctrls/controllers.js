app.controller('animateCtrl', function($scope, $rootScope){
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
      $rootScope.animation = currRoute.animation;
    });
  });