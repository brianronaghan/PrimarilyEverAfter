angular.module('shortly.links', [])

.controller('CandidateController', function ($scope, $location, Candidates) {
  // Your code here
  init();
  function init () {
    $scope.candidates = [
      {name: "cand name",
        image: "http://blogs-images.forbes.com/markhughes/files/2015/04/Batman-v-Superman-Batsuit-2.png",
        delegateCount: 45,
        money: 123456789,
        URL: "http://www.berniesanders.com",
        twitter: 'http://twitter.com/SenSanders'
      },
      {name: "cand name",
        image: "http://blogs-images.forbes.com/markhughes/files/2015/04/Batman-v-Superman-Batsuit-2.png",
        delegateCount: 45,
        money: 123456789,
        URL: "http://www.berniesanders.com",
        twitter: 'http://twitter.com/SenSanders'
      }
    ]
    // Candidates.getAll()
    //   .then(function (array) {
    //     $scope.candidates = array;
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }
  $scope.getall = function () {
    Candidates.getAll()
      .then(function (array) {
        $scope.candidates = array;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //
  // $scope.goto = function (link) {
  //   Links.navTo(link)
  //     .then(function () {
  //       console.log("we don't want no data");
  //     })
  //     .catch(function (error) {
  //       console.error("error info ", error);
  //     });
  // };
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
