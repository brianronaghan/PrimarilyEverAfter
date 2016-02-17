angular.module('PEA.candidates', [])

.controller('CliCanController', function ($scope, $location, Candidates, GetData) {
  // Your code here
  $scope.polls =[];
  $scope.candidates = [];
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
        $scope.distributePolls();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.distributePolls = function () {
    $scope.polls.forEach(function (poll) {
      if(poll.party ==='dem' || poll.party === 'rep') {
        var pollName = poll.pollster +  " "+ poll.ques;
        poll.results.forEach(function (result){
          if (result.choice !== 'Other/Undecided' && result.choice !== 'Undecided' && result.choice !== 'No Answer' && result.choice !== 'Other' && result.choice !== "Wouldn't Vote") {
            $scope.candidates.forEach(function(cand){
              if (!cand.polls) {
                cand.polls = [];
              }
              if (cand.name === result.choice) {
                cand.polls.push({name:pollName, score:result.val});
              }
            });
          }
        });
      }
    });
  };
  init();
});
