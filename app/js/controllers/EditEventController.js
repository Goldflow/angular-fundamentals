'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        //parameters:
        //1st parameter is the eventData filled in by user from the form
        //2nd parameter is whether or not the data is valid
        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid)
            {
                window.alert('event ' + event.name + ' saved!');
            }
        }

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html"
        }
    }
);