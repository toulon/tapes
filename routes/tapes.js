/**
 * Created with JetBrains WebStorm.
 * User: toulon
 * Date: 7/6/13
 * Time: 12:41 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose, tapes;
mongoose = require('mongoose');
tapes = mongoose.model('Tapes');

exports.list = function(req, res){
    tapes.find( {type: 'Weekly Full'}).exec(function(err, recrd){
        console.log(recrd)
        console.error('recrd', JSON.stringify(recrd))
        res.render('tapes/list', { result: recrd });
    });
};