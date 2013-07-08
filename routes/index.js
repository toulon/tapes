
/*
 * GET home page.
 */

var mongoose = require('mongoose')
    , people = mongoose.model('People');

exports.index = function(req, res){
    people.find({username: "Joe"}).exec(function(err, userinfo){
        console.log(err);
        console.error('userinfo', JSON.stringify(userinfo));
        res.render('index', { user : userinfo });
    });
};