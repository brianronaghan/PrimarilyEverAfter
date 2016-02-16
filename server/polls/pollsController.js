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
    console.log("in huffpo server side ");

    pollster.polls({topic: '2016-president-dem-primary'}, function(resp){
      console.log(resp.length);
      resp.forEach(function (poll){
        var pollInfo = {};
        pollInfo.pollster = poll.pollster;
        pollInfo.endDate = poll.end_date;
        poll.questions.forEach(function(ques) {
          // if
          console.log(ques);
        });


        // createPoll();

        });
        res.json(resp);
      });
   }
 };
