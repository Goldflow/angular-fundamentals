/**
 * Created by kdehbi on 21/04/2016.
 */
'use strict';

eventsApp.controller('TimeoutSampleController',

function TimeoutSampleController($scope, $timeout) {


    //HERE
     var promise = $timeout(
         function(){//function to be called when time expires
            $scope.name = "DARY!!!";
         }  //setting delay, after which the passed function should be executed
         , 3000);

    //this function will call the function $timeout.cancel
    //and $timeout.cancel() will pass in the promise
    // that was created earlier when the timeout was created (see HERE)
    $scope.cancel = function() {
        $timeout.cancel(promise);
    }


})