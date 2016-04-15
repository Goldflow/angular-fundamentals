'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};

        //Gravatar > http://www.wpbeginner.com/beginners-guide/what-is-gravatar-and-why-you-should-start-using-it-right-away/
        //Globally Recognized Avatar GRavatar
        //this function takes in an email address
        $scope.getGravatarUrl = function(email) {
            //this is how to create a base gravatar URL, links to generic gravatar profile image
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }

    }
);
