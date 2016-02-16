angular.module('PEA.candidates', [])

.controller('CliCanController', function ($scope, $location, Candidates, GetData) {
  // Your code here
  $scope.polls =[];
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
    // GetData.updatehuff();
    $scope.gethuff();
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
  $scope.gethuff = function () {
    GetData.gethuff()
      .then(function (array) {
        $scope.polls = array;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  init();


});
