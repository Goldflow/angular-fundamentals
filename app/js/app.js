'use strict';
//creates module named eventsApp
//modules basic building block of Angular
//[] signifies that the module eventsApp depends on. those are loaded before eventsApp itself
//we place this module in a global variable so it can be accessed by controllers & services
var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource' ])
    //to create/use $cacheFactory we create factory with service name 'myCache'
    //passing through a function which takes $cacheFactory & has a capacity of 3
    //this limits the cache to 3 items omit capacity
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3})
    });

