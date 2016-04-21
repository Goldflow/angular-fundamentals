/**
 * Created by kdehbi on 21/04/2016.
 */
'use strict';

eventsApp.controller('FilterSampleController',
    //injecting $filter service
function FilterSampleController($scope, durationsFilter) {
    $scope.data = {};

    $scope.data.duration1 = durationsFilter(1);
    $scope.data.duration2 = durationsFilter(2);
    $scope.data.duration3 = durationsFilter(3);
    $scope.data.duration4 = durationsFilter(4);



})

//after below sample, instructor notes that using $filter service is not necessary
//because we can inject durationsFilter directly

/*
 eventsApp.controller('FilterSampleController',
 //injecting $filter service
 function FilterSampleController($scope, $filter) {
 $scope.data = {};

 //using $filter service to get access to my durations service
 var durations = $filter('durations');
 //then we call durations service passing in values 1 through 4
 //and sticking it to the "data" model on the $scope
 $scope.data.duration1 = durations(1);
 $scope.data.duration2 = durations(2);
 $scope.data.duration3 = durations(3);
 $scope.data.duration4 = durations(4);



 })
// */