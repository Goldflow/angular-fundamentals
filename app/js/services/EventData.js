/**
 * Created by kdehbi on 15/04/2016.
 */
//what parameters you pass in to the factory method
//1) the name of the service (here 'eventData')
//2) a function that returns the object that will become that service

//here we inject resource
eventsApp.factory('eventData', function ($resource) {
    return {
        getEvent: function () {

            //to make $resource work, we need to register the module with the app (in app.js here)
            //based on restful architecture
            //so assumes your service is using restbased architecture
            return $resource('/data/event/:id', //this is the format of the (rest)url
                {id:'@id'})//second parameter of the resource,
                // is an object that specifies default values that are used in that route
                // so > id in url will be replaced by id in object being saved/retrieved
                .get({id:1}); //so we call get, we pass object to say we want object with id 1
        }
      }
});



/**

 {
        name: "Angular Boot Camp",
        date: "1/5/2016",
        time: "10:30 am",
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
            imageUrl:'/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName:'Bob Smith',
                duration: 1,
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of directives!',
                upVoteCount: 0,
            },
            {
                name: 'Scopes for fun and profit',
                creatorName:'John Doe',
                duration: 2,
                level: 'Introductory',
                abstract: 'In this session you will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.',
                upVoteCount: 0
            },
            {
                name: 'Well behaved Controllers',
                creatorName:'Jane Doe',
                duration: 4,
                level: 'Intermediate',
                abstract: 'Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbours',
                upVoteCount: 0
            }

        ]
    }

 */