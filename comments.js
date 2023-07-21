//create web server
var express = require('express');
var app = express();
var path = require('path');

//set up handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//get the data from the form
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get the data from the form
app.use(require('body-parser').urlencoded({extended: true}));

//set up port
app.set('port', process.env.PORT || 3000);

//use the public folder
app.use(express.static(path.join(__dirname, 'public')));

//render the home page
app.get('/', function(req, res){
  res.render('home');
});

//render the contact page
app.get('/contact', function(req, res){
  res.render('contact');
});

//render the about page
app.get('/about', function(req, res){
  res.render('about');
});

//render the thank you page
app.get('/thankyou', function(req, res){
  res.render('thankyou');
});

//render the comment page
app.get('/comment', function(req, res){
  res.render('comment');
});

//render the comment page
app.post('/comment', function(req, res){
  console.log("The form was submitted");
  console.log(req.body);
  res.render('comment', {data: req.body});
});

//send a 404 page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

//send a 500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

//listen on the port
app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});