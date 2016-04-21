/**
 * Created by kdehbi on 21/04/2016.
 */
'use strict';

//generally not a good idea to use dollar sign $ in the name of the service
//because this is a naming convention used for Angular's own services
//however here we want to do it for educational purposes

//we create an exception handler service
eventsApp.factory('$exceptionHandler', function() {
    return function(exception) {
        //when an exception is passed in, we print it in console log
        //we will generate exceptions in the LocaleSample.html
        console.log("exception handled: " + exception.message);
    }
})