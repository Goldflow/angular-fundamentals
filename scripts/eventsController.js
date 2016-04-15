/**
 * Created by kdehbi on 15/04/2016.
 */
//we are going to need nodes files system (fs) object to read & write to disk
var fs = require('fs');


//GET method, function with request & response parameter
module.exports.get = function(req, res){
    //read the file from disk with id from request parameters
    //+json extension to the id
    //we will look for this file at app/data/event -> hence the json files
    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json','utf8');

    //now we need to set content type('application/json') & return the json
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

//similar to write
module.exports.save = function (req,res) {
    var event = req.body;
    //save the file to disk
    fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
};