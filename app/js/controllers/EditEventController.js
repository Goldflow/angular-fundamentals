'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};
        //parameters:
        //1st parameter is the eventData filled in by user from the form
        //2nd parameter is whether or not the data is valid
        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid)
            {
                //window.alert('event ' + event.name + ' saved!');
                eventData.save(event).
                    $promise
                    .then(function(response) {console.log('success', response)})
                    .catch(function(response) {console.log('failure',response)}
                );
            }
        };

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html"
        }
    }
);