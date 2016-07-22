(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {
        $scope.name = '';
        $scope.password = '';

        $scope.login = function () {
            console.log(`${$scope.name} in as we speak`);
            loginService.userLogin($scope.name, $scope.password)
            .then(function(response) {
              
                console.log('getting the response', response);
                // username = name;
                console.log(username);
            });
            // $location.path('/explore');
            // if {
            //   $scope.name = username
            // }
            // .then {
            //   location.path('/explore');
            // }
            // else {
            //   console.popup("IMPOSTOR")
            // }
        };
    }]);
}

},{}],2:[function(require,module,exports){
module.exports = function (app) {
    app.controller('NewUserController', ['$scope', '$http', '$location', 'newUserService', function ($scope, $http, $location, newUserService) {
      $scope.name = '';
      $scope.password = '';

      $scope.createUser = function () {
          console.log(`${$scope.name} is a new user`);
          newUserService.userLogin($scope.name, $scope.password);
          $location.path('/explore');
      };

    }]);
};

},{}],3:[function(require,module,exports){
let app = angular.module('MarketApp', ['ngRoute', 'MarketControllers', 'MarketServices', 'MarketDirectives']);
angular.module('MarketControllers', []);       // create empty module
angular.module('MarketServices', []);          // create empty module
angular.module('MarketDirectives', []);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'LoginController',
      templateUrl: 'templates/login.html',
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'templates/login.html',
    })
    .when('/newuser', {
      controller: 'NewUserController',
      templateUrl: 'templates/newuser.html',
    })
    .when('/explore', {
      controller: 'ExploreController',
      templateUrl: 'templates/explore.html',
    })

}])

//controllers
// require('./controllers/LibraryController.js')(app);
require('./controllers/LoginController.js')(app);
require('./controllers/NewUserController.js')(app);
// require('./controllers/playlistController.js')(app);

// services
// require('./services/libraryService.js')(app);
require('./services/login.js')(app);
require('./services/newUser.js')(app);

},{"./controllers/LoginController.js":1,"./controllers/NewUserController.js":2,"./services/login.js":4,"./services/newUser.js":5}],4:[function(require,module,exports){
module.exports = function(app) {
    app.factory('loginService', ['$http', function($http) {
        let username = "";

        return {
            userLogin: function(name, password) {
              console.log("login might be working")
                username = name;
                return $http({
                    method: 'POST',
                    url: '/login',
                    data: {
                        username: name,
                        password: password
                    }
                })
            },
            getUserName: function() {
                return username;
            },
        }
    }])
}

},{}],5:[function(require,module,exports){
module.exports = function(app) {
    app.factory('newUserService', ['$http', function($http) {
        let username = "";

        return {
            userLogin: function(name, password) {
              console.log("login might be working")
                username = name;
                return $http({
                    method: 'POST',
                    url: '/create-user',
                    data: {
                        username: name,
                        password: password
                    }
                }).then(function(response) {
                    console.log('getting the response', response);
                    // username = name;
                    console.log(username);
                })
            },
            getUserName: function() {
                return username;
            },
        }
    }])
}

},{}]},{},[3])