/**
 * Created by kdehbi on 19/04/2016.
 */
'use strict';

eventsApp.controller('CacheSampleController',
    //we need to inject myCache, which is our cacheService ($cacheFactory)
function CacheSampleController($scope, myCache) {
    //so this is how items are added to the cache = set of key value pairs
    //the addToCache takes a key value pair
    $scope.addToCache = function (key, value) {
        myCache.put(key, value);
    };

    $scope.readFromCache = function(key)
    {//gets given key
        return myCache.get(key);
    };

    $scope.getCacheStats = function(){

        return myCache.info();
    }
})