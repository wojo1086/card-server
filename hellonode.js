var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const Connection = require('./db-connect')

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(function(req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', false);

	// Pass to next layer of middleware
	next();
});

app.get('/', function(req, res) {
	res.send('Hello World!')
});

app.post('/signup', jsonParser, function(req, res) {
	console.log(Connection)
	res.send(req.body)
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!')
});