/**
 * Module dependencies.
 */
var mongoose = require('mongoose/');
//var config = require('./config');
//db = mongoose.connect(config.creds.mongoose_auth),
//    Schema = mongoose.Schema; - See more at: http:
// //backbonetutorials.com/nodejs-restify-mongodb-mongoose/#sthash.9CrXag5k.dpuf

require('./models/Tapes');
require('./models/People');

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , tapes = require('./routes/tapes')
    , http = require('http')
    , path = require('path');

mongoose.connect('mongodb://localhost/m101');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var app = express();

// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/tapes', tapes.list)

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});