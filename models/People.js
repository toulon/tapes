/**
 * Created with JetBrains WebStorm.
 * User: toulon
 * Date: 7/6/13
 * Time: 10:46 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var PeopleSchema;
PeopleSchema = new Schema({
    username: String,
    password: String

});

mongoose.model('People', PeopleSchema)
