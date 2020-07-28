var express 	= require('express');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var home 		= require('./controller/home');
var logout 		= require('./controller/logout');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser());
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);

app.get('/', function(req, res){
	res.send("LOGIN FOR USERS!<br> <a href='/login'> login</a> ");
});

app.post('/', async(req, res)=> {
 var user={ username: req.body.username, password: req.body.password}
users.push(user);
res.status(201).send();
})

app.listen(3000, function(){
	console.log('express http server started at...3000');
});
