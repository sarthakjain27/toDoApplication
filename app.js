var express=require('express');
var todoController=require('./controllers/todoController.js');
var app=express();

//set up template engine
app.set('view engine','ejs');

//Since we have static files and we want to serve them too.
//So we use express in build express.static middleware

/*
What below command does is, whenever we visit /assets route, app.use is going to map it to ./public
and will look for static files there
*/
//app.use('/assets',express.static('./public'));

//Removing '/assets' so that this express.static can be used on every route which we put in url
//to get static files. So / after port is replace by ./public - just for static file get
app.use(express.static('./public'))


//fire up controllers
todoController(app);

//set up port
app.listen(3000);
console.log('Listening to port 3000');
