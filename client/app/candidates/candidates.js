angular.module('PEA.candidates', [])

.controller('CliCanController', function ($scope, $location, Candidates, GetData) {
  // Your code here
  $scope.candidates = ["foo","bar"];
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
    $scope.getall();
    // $scope.getscores();
    GetData.gethuff();
  }
  $scope.getall = function () {
    Candidates.getAll()
      .then(function (array) {
        $scope.candidates = array.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  init();

});
