'use strict';
//creates module named eventsApp
//modules basic building block of Angular
//[] signifies that the module eventsApp depends on. those are loaded before eventsApp itself
//we place this module in a global variable so it can be accessed by controllers & services
var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource' ]);
