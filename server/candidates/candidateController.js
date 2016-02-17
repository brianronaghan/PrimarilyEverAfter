var Candidate = require('./CandidateModel.js');
    Q = require('q');
    util = require('../config/utils.js');
    var request = require('request');
    var fs = require('fs');
    var path = require('path');
    var routes = require('../config/routes.js');
// Promisify a few mongoose methods with the `q` promise library
var findCandidate = Q.nbind(Candidate.findOne, Candidate);
var createCandidate = Q.nbind(Candidate.create, Candidate);
var findAllCandidates = Q.nbind(Candidate.find, Candidate);
var pollster = require('pollster');

module.exports = {
  addCandidates: function (req, res, next) {
    console.log("whoohoo add cands");

    // for(var x = 0; x < cands.length; x++) {
    //   createCandidate(cands[x]);
    // }
  },
  allCandidates: function (req, res, next) {
    findAllCandidates({})
      .then(function (candidates) {
        res.json(candidates);
    })
    .fail(function (error) {
      error.log(error);
      next(error);
    });
  },
  getScore: function (req, res, next) {
    var theFile = path.join(__dirname, '../files/green');
    console.log("in get scores server side ", theFile);
      request({
        uri: 'http://www.thegreenpapers.com/P16/'}, function (error, response, body) {
          if(error) {
            console.error("err in request ", error);
          }
          fs.writeFile(theFile, body, function () {
            console.log("green file...");
          });
        }
      );
    }
 };


    // },
    //
  //
  // newCandidate: function (req, res, next) {
  //   var name = req.body.name;
  //   // if (!util.isValidUrl(url)) {
  //   //   return next(new Error('Not a valid url'));
  //   // }
  //
  //   findCandidate({name: name})
  //     .then(function (match) {
  //       if (match) {
  //         res.send(match);
  //       } else {
  //         return util.getUrlTitle(url);
  //       }
  //     })
  //     .then(function (title) {
  //       if (title) {
  //         var newLink = {
  //           url: url,
  //           visits: 0,
  //           base_url: req.headers.origin,
  //           title: title
  //         };
  //         return createLink(newLink);
  //       }
  //     })
  //     .then(function (createdLink) {
  //       if (createdLink) {
  //         res.json(createdLink);
  //       }
  //     })
  //     .fail(function (error) {
  //       next(error);
  //     });
  // },

// INITIAL DB UPLOAD:

//
// var cands = [{name: "Clinton",
//   fullName: 'Hilary Clinton',
//   party: 'dem',
//   image: '../assets/clinton.jpg',
//   delegateCount: 44,
//   money: 123456789,
//   url: "https://www.hillaryclinton.com/",
//   twitter: 'https://twitter.com/HillaryClinton'
// },
// {name: "Sanders",
//   fullName: 'Bernie Sanders',
//   party: 'dem',
//   image: '../assets/sanders.jpg',
//   delegateCount: 36,
//   money: 123456789,
//   url: 'http://www.berniesanders.com',
//   twitter: 'http://twitter.com/SenSanders'
// },
// {name: "Trump",
//   fullName: 'Donald Trump',
//   party: 'rep',
//   image: '../assets/trump.jpg',
//   delegateCount: 17,
//   money: 123456789,
//   url: 'https://www.donaldjtrump.com/',
//   twitter: 'http://twitter.com/realDonaldTrump'
// },
// {name: "Cruz",
//   fullName: "Ted Cruz",
//   party: 'rep',
//   image: '../assets/cruz.jpg',
//   delegateCount: 11,
//   money: 123456789,
//   url: "https://www.tedcruz.org/",
//   twitter: 'http://twitter.com/tedcruz'
// },
// {name: "Rubio",
//   fullName: 'Marco Rubio',
//   party: 'rep',
//   image: '../assets/rubio.jpg',
//   delegateCount: 10,
//   money: 123456789,
//   url: 'https://marcorubio.com/',
//   twitter: 'http://twitter.com/marcorubio'
// },
// {name: "Kasich",
//   fullName: "John Kasich",
//   party: 'rep',
//   image: '../assets/kasich.jpg',
//   delegateCount: 5,
//   money: 123456789,
//   url: 'http://johnkasich.com/',
//   twitter: 'http://twitter.com/JohnKasich'
// },
// {name: "Bush",
//   fullName: "Jeb Bush",
//   party: 'rep',
//   image: '../assets/bush.jpg',
//   delegateCount: 4,
//   money: 123456789,
//   url: 'https://jeb2016.com/?lang=en',
//   twitter: 'http://twitter.com/JebBush'
// },
// {name: "Carson",
//   fullName: "Ben Carson",
//   party: 'rep',
//   image: '../assets/carson.png',
//   delegateCount: 3,
//   money: 123456789,
//   url: 'https://www.bencarson.com/',
//   twitter: 'http://twitter.com/RealBenCarson'
// },
// {name: "Christie",
//   fullName: "Chris Christie",
//   party: 'rep',
//   image: '../assets/christie.jpg',
//   delegateCount: 0,
//   money: 123456789,
//   url: 'https://www.chrischristie.com/',
//   twitter: 'https://twitter.com/ChrisChristie'
// }];
