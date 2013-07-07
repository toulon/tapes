/**
 * Created with JetBrains WebStorm.
 * User: toulon
 * Date: 7/6/13
 * Time: 12:39 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var TapesSchema = new Schema({
    name : String,
    label : String,
    created : String,
    expires : String,
    type : String,
    status : String,
    id : String

});

mongoose.model('Tapes', TapesSchema)
