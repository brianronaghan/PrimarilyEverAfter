angular.module('PEA.candidates', [])

.controller('CliCanController', function ($scope, $location, Candidates) {
  // Your code here
  $scope.candidates = ["foo","bar"];
  function init () {
    console.log("am I ever in init of candidate Controller?");
    $scope.candidates = [
      {name: "cand name",
        image: "http://blogs-images.forbes.com/markhughes/files/2015/04/Batman-v-Superman-Batsuit-2.png",
        delegateCount: 30,
        money: 123456789,
        url: "http://www.berniesanders.com",
        twitter: 'http://twitter.com/SenSanders'
      },
      {name: "cand name",
        image: "http://blogs-images.forbes.com/markhughes/files/2015/04/Batman-v-Superman-Batsuit-2.png",
        delegateCount: 45,
        money: 123456789,
        url: "http://www.berniesanders.com",
        twitter: 'http://twitter.com/SenSanders'
      }
    ];
    console.log("in init ", $scope.candidates);
  }
  init();
  // $scope.getall = function () {
  //   Candidates.getAll()
  //     .then(function (array) {
  //       console.log("good get on candidates ", array);
  //       // $scope.candidates = array;
  //       $scope.candidates = [
  //         {name: "cand name",
  //           image: "http://blogs-images.forbes.com/markhughes/files/2015/04/Batman-v-Superman-Batsuit-2.png",
  //           delegateCount: 45,
  //           money: 123456789,
  //           url: "http://www.berniesanders.com",
  //           twitter: 'http://twitter.com/SenSanders'
  //         },
  //         {name: "cand name",
  //           image: "http://blogs-images.forbes.com/markhughes/files/2015/04/Batman-v-Superman-Batsuit-2.png",
  //           delegateCount: 45,
  //           money: 123456789,
  //           url: "http://www.berniesanders.com",
  //           twitter: 'http://twitter.com/SenSanders'
  //         }
  //       ];
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
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
