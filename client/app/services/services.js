angular.module('PEA.services', [])

.factory('Candidates', function ($http) {
   var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/candidates'
    })
    .then(function (err, resp) {
      console.log("am i here in good get? ", resp);
      // return resp.data;
    });
  };
  return {
    getAll: getAll
    // addOne: addOne,
    // navTo: navTo
  };
})
.factory('GetData', function ($http) {
  var getHuffPost = function () {
    console.log("hello in huffpost?");

    return $http({
      method: 'GET',
      url: 'http://elections.huffingtonpost.com/pollster/api/charts/2012-general-election-romney-vs-obama.json'
    })
    .then(function (resp) {

      console.log("am i here in good huffpo get? ", resp);
      return resp.data;
    });
  };
  return {
    getHuffPost: getHuffPost
  };

})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});




// PERHAPS USEFUL FOR LATER when I implement notes?

  //  var addOne = function (newUrl) {
  //   var obj = JSON.stringify({url: newUrl});
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: obj
  //   })
  //   .then(function (resp) {
  //     resp.status = 201;
  //     return resp.data;
  //   });
  // };

  // var navTo = function (link) {
  //   var theUrl = '/' + link.code;
  //   return $http({
  //     method: 'GET',
  //     url: theUrl
  //   });
    // .then(function (resp) {
    //   console.log("in factory database call ", resp.data);
    //   return resp.data;
    // });
