angular.module('PEA.candidates', [])

.controller('CliCanController', function ($scope, $location, Candidates, GetData) {
  // Your code here
  $scope.candidates = ["foo","bar"];
  $scope.gethuff = function () {
    GetData.getHuffPost()
      .then(function(data) {
        $scope.huffPo = data;
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  function init () {
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
    $scope.gethuff();
  }
  init();
  $scope.getall = function () {
    Candidates.getAll()
      .then(function (array) {
        console.log("good get on candidates ", array);
        // $scope.candidates = array;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});
