/**
 * Created by kdehbi on 15/04/2016.
 */

//here we inject resource
eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});

    return {
        getEvent: function () {

            return resource.get({id: 1}); //so we call get, we pass object to say we want object with id 1
        },
        save: function (event) {
            event.id = 999;
            return resource.save(event);
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