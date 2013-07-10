
/*
 * GET home page.
 */

var mongoose = require('mongoose')
    , people = mongoose.model('People');

exports.list = function(req, res){
    people.find({username: "Joe"}).exec(function(err, userinfo){
        console.log(userinfo);
        console.error('userinfo', JSON.stringify(userinfo));
        res.render('user/list', { user : userinfo });
    });
};