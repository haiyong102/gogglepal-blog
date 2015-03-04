'use strict';

/* Controllers */

var gogglePalControllers = angular.module('gogglePalControllers', []);

gogglePalControllers.controller('HomeCtrl', ['$scope', '$http', 'BlogList',
  function($scope, $http, BlogList) {
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';*/

    $scope.featuresRow1 = [
    	{
    		"src": "img/features/6WG_icon_highlight.png",
    		"header": "We use a 6-Axis Gyroscope",
    		"body": "A gyroscope enables GogglePal to track your performance and test your limits."
    	},
    	{
    		"src": "img/features/LTB_icon_highlight.png",
    		"header": "Long Battery Life",
    		"body": "GogglePal is gentle on your battery. Feel confident you can spend ALL DAY outside."
    	},
    	{
    		"src": "img/features/RTS_icon_highlight.png",
    		"header": "Real Time Speed",
    		"body": "An unobtrusive dashboard sits in your line of sight showing your speed and helping you to stay safe."
    	},
    	{
    		"src": "img/features/SN_icon_highlight.png",
    		"header": "Social Network",
    		"body": "The GogglePal App is a community for just YOU and YOUR friends on the mountain. Compare, compete, and play."
    	}
    ];
    $scope.featuresRow2 = [
        {
            "src": "img/features/TD_icon_highlight.png",
            "header": "Trail Summary",
            "body": "Look back on the terrain you rode, the secret stashes of powder you scored, and the memories you made during your day."
        },
        {
            "src": "img/features/UM_icon_highlight.png",
            "header": "Universal Mount",
            "body": "Don’t worry about buying a new pair. Your favorite goggles will work with GogglePal."
        },
        {
            "src": "img/features/VD_icon_highlight.png",
            "header": "Vertical",
            "body": "See how much vertical you collected from the mountain in a simple snapshot."
        }
    ];
    $scope.posts = BlogList;
  }]);

gogglePalControllers.controller('BlogCtrl', ['$scope', '$http', 'BlogList',
  function($scope, $http, BlogList) {
    /*$scope.blogId = $routeParams.blogId;*/
    $scope.posts = BlogList;
  }]);

gogglePalControllers.controller('BlogDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    /*$scope.blogId = $routeParams.blogId;*/
    $http.get('blog/' + $routeParams.blogId + '.json').success(function(data) {
      $scope.blog = data;
    });
  }]);
