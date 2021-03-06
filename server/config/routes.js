var candidatesController = require('../candidates/candidateController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware
var pollsController = require('../polls/pollsController.js');

module.exports = function (app, express) {
  app.get('/', candidatesController.allCandidates);
  app.get('/api/addto', candidatesController.addCandidates);

  // app.post('/api/signin', userController.signin);
  // app.post('/api/users/signup', userController.signup);
  // app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  app.get('/api/candidates/', candidatesController.allCandidates);
  // app.post('/api/links/', candidatesController.newCandidate);
  app.get('/api/gethufffromhuff', pollsController.getHuffPo);

  app.get('/api/getscores', candidatesController.getScore);

  app.get('/api/dbhuff', pollsController.currentHuff);



  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
