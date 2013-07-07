/**
 * Created with JetBrains WebStorm.
 * User: toulon
 * Date: 7/6/13
 * Time: 12:41 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose')
    , Tapes = mongoose.model('Tapes');

exports.tapes = function(req, res){
    Tapes.find( {type: { $ne : 'Weekly Full'}}).exec(function(err, recrd){
        console.log(recrd)
        console.error('recrd', JSON.stringify(recrd))
        res.render('tapes/tapes', { result: recrd });
    });
};