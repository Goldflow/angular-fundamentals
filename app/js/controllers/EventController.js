'use strict';

eventsApp.controller('EventController',
    //this function will be the controller itself
    //controller's responsability is the create the scope
    //we will pass empty $scope & the controller will populate this scope with the model
    function EventController($scope, eventData, $log){

        $scope.sortorder = '-upVoteCount'; //-upVoteCount when  used as filter, will be sorted by highest upVoteCount first
        //upVoteCount when  used as filter, will be sorted by lowest upVoteCount first
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystle= {color:'red'};
        $scope.buttonDisabled = true;



        //needs a callback function to call in case it succeeds
        //this function represents the successCallBack defined in the EventData
        eventData.getEvent()
            //we can now get the success & error methodes on
            //the result of the getEvent call which is now returning the promise
            .success(function(event)
            {
                $scope.event = event;
            })
            .error(function (data,status,headers,config){
                //function in case of error
                $log.warn(data, status, headers(), config);
            })

        ;


        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };


        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);