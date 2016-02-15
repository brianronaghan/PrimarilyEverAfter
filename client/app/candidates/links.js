angular.module('shortly.links', [])

.controller('CandidateController', function ($scope, $location, Candidates) {
  // Your code here
  // $scope.links = [];
  init();
  function init () {
    Candidates.getAll()
      .then(function (array) {
        $scope.links = array;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  $scope.getall = function () {
    Links.getAll()
      .then(function (array) {
        $scope.links = array;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.goto = function (link) {
    Links.navTo(link)
      .then(function () {
        console.log("we don't want no data");
      })
      .catch(function (error) {
        console.error("error info ", error);
      });
  };
});


  // $scope.signin = function () {
  //   Auth.signin($scope.user)
  //     .then(function (token) {
  //       $window.localStorage.setItem('com.shortly', token);
  //       $location.path('/links');
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
