/**
 * Created by kdehbi on 21/04/2016.
 */
'use strict';

eventsApp.controller('LocaleSampleController',
    //injecting $locale service to use $locale datetime format
function LocaleSampleController($scope, $locale) {


    $scope.myDate = Date.now();
    //myFormat is set to full date property of locale date time format
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

    //to try out ExceptionHandler, uncomment below line
    //throw {message: 'error message thrown on purpose m0f0'};


})