'use strict';

/* Services */

var gogglePalServices = angular.module('gogglePalServices', []);

gogglePalServices.factory('BlogList', function () {
  return [
  		{
  			"id": 2,
  			"author": "GogglePal Team",
			"title": "The Future is Here:",
			"subtitle": "What is GogglePal?",
			"date": "February 24, 2015"
  		},
    	{
    		"id": 1,
    		"author": "GogglePal Team",
    		"title": "Welcome!",
    		"subtitle": "Fitness, Performance, Social and Gaming, GogglePal is going to revolutionize the snow sports!",
    		"date": "February 05, 2015"
    	}
    ];
});