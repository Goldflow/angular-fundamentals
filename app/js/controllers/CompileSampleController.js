/**
 * Created by kdehbi on 21/04/2016.
 */
'use strict';

eventsApp.controller('CompileSampleController',

function CompileSampleController($scope, $compile, $parse) {

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

    //we create a variable that is set to $parse()
    //so the var represents a function that takes in an expression
    //however, this function also returns a function (linkedfunction)
    var fn = $parse('1+2');
    //so if we run this function, it will evaluate the expression and return a value
    console.log(fn());

    //here $parse, will parse the expression 'event.name'
    var getter = $parse('event.name');
    //getter is set to a function, but this function also returns a function

    var context1 = {event : {name:'AngularJS Boot Camp'}};
    var context2 = {event: {name:'Code Camp'}}

    console.log(getter(context1));
    console.log(getter(context2));

    //the function returned by $parse can take in a couple of parameters
    //for example a context (here context2) and a local context (here context1)
    //anything in context1 will take precedence over context2 in case of overlap
    console.log(getter(context2,context1));//will return AngularJS Boot Camp

    //you can also assign variables to contexts
    //getter here (before) was the function returned by $parse
    var setter = getter.assign;
    setter(context2, 'Code Retreat');


})