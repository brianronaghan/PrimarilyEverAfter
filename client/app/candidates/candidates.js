angular.module('PEA.candidates', [])

.controller('CliCanController', function ($scope, $location, Candidates, GetData) {
  // Your code here
  // $scope.candidates = ["foo","bar"];
  $scope.getscores = function () {
    GetData.getScores()
      .then(function(data) {
        $scope.scores = data;
      })
      .catch(function(error) {
        console.error("get scores err ", error);
      });
  };
  function init () {
    // GetData.addto();
    $scope.candidates = $scope.getall();
    console.log("in init ",$candidates);
    $scope.getscores();
  }
  $scope.getall = function () {
    Candidates.getAll()
      .then(function (array) {
        console.log("good get on candidates ", array);
        $scope.candidates = array.data;
        console.log($scope.candidates);
        // $scope.candidates = array;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  init();

});
