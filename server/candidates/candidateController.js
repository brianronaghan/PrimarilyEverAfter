var Candidate = require('./CandidateModel.js');
    Q = require('q');
    util = require('../config/utils.js');

// Promisify a few mongoose methods with the `q` promise library
var findCandidate = Q.nbind(Candidate.findOne, Candidate);
var createCandidate = Q.nbind(Candidate.create, Candidate);
var findAllCandidates = Q.nbind(Candidate.find, Candidate);

module.exports = {
  allCandidates: function (req, res, next) {
    findAllCandidates({})
      .then(function (candidates) {
        console.log("correct in all candidates get on server");
        res.json(candidates);
    })
    .fail(function (error) {
      error.log(error);
      next(error);
    });
  },

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

  navToLink: function (req, res, next) {
    findLink({code: req.params.code})
      .then(function (link) {
        if (!link) {
          return next(new Error('Link not added yet'));
        }
        link.visits++;
        link.save(function (err, savedLink) {
          if (err) {
            next(err);
          } else {
            // var headers = {
            //   'Access-Control-Allow-Origin':'*',
            //   'Content-Type':'text/html'
            // };
            // res.writeHead(302, headers);
            // console.log("res on server ", res);
            // console.log("redirect is: ",res.redirect);
            res.redirect(savedLink.url);
          }
        });
      })
      .fail(function (error) {
        next(error);
      });
  }

};
