var Poll = require('./pollModel.js');
    Q = require('q');
    util = require('../config/utils.js');
    var request = require('request');
    var fs = require('fs');
    var path = require('path');
    var routes = require('../config/routes.js');
// Promisify a few mongoose methods with the `q` promise library
var findPoll= Q.nbind(Poll.findOne, Poll);
var createPoll = Q.nbind(Poll.create, Poll);
var findAllPolls = Q.nbind(Poll.find, Poll);
var pollster = require('pollster');

module.exports = {
  // get huff should only happen like once a night. JESUS.
  getHuffPo: function (req, res, next) {
    pollster.polls({topic: '2016-president-dem-primary'}, function(resp){
      resp.forEach(function (poll){
        poll.questions.forEach(function(ques) {
          ques.subpopulations.forEach(function (subpop) {
            if (ques.name.indexOf('Dem')>0 || ques.name.indexOf('Rep') > 0 || ques.name.indexOf('Gen') > 0) {
              var pollInfo = {};
              pollInfo.pollster = poll.pollster;
              pollInfo.endDate = poll.end_date;
              pollInfo.numResponses = subpop.observations;
              pollInfo.group = subpop.name;
              if (ques.name.indexOf('Dem')>0) {
                pollInfo.party = 'dem';
              } else if (ques.name.indexOf('Rep')>0) {
                pollInfo.party = 'rep';
              } else if(ques.name.indexOf('Gen')>0) {
                pollInfo.party = 'gen';
              }
              pollInfo.ques = ques.name;
              pollInfo.results =[];
              subpop.responses.forEach(function (response) {
                var resp = {};
                resp.choice = response.choice;
                resp.val = response.value;
                pollInfo.results.push(resp);
              });
              // console.log("pollInf obj ", pollInfo);
              createPoll(pollInfo);
            } // ends if in any 3 cats
          });
        });
      });
    });
    res.json("end of HUFFPO load");
  },
  currentHuff: function(req, res, next) {
    findAllPolls({})
    .then(function (polls) {
      res.json(polls);
  })
  .fail(function (error) {
    error.log(error);
    next(error);
  });
  }
 };
