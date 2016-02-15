// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('PEA.auth', [])

.controller('AuthController', function ($scope, $window, $location, PEA.services, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.PEA', token);
        $location.path('/candidates');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.PEA', token);
        $location.path('/candidates');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signout = function () {
    console.log("in singoute on auth controller");
    Auth.signout();
  };
});
