var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes =require('./controllers/burgers++controllers.js');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//
app.use(methodOverride('_method'))

app.engine('handlebars', exphbs({
	defaultLayout: 'main.handlebars'
}));
app.set('view engine', 'handlebars');

app.use('/', routes);
var PORT = process.env.PORT || 3030;

app.listen(PORT, function(){
	console.log('App listening bruh on PORT ' + PORT);

});