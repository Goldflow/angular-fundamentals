/**
 * Created by kdehbi on 21/04/2016.
 */
'use strict';

eventsApp.controller('CompileSampleController',

function CompileSampleController($scope, $compile) {

    //function will be called by button on our page
    //takes in markup
    $scope.appendDivToElement = function(markup) {
        //calling $compile service & passing in markup
        //so we compile this markup in the context of the scope
        //which is passed in the compile also
        //(the compile service returns a linking function so it returns a function in which the $scope is passed)
        return $compile(markup)($scope).
        //than this markup is appended to the appendHere div we created in the CompileCache.html
        appendTo(angular.element('#appendHere'));
        //angular.element similar to jQuery
    }
})