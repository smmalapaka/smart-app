/**
 * Created by mlingolu on 7/11/16.
 */

var express= require('express');
var path =require('path');
var favicon = require('serve-favicon');
var router =require('./server/routes');

var ejs =require('ejs');

var app= express();
app.use(express.static(path.join(__dirname,'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.engine('html',ejs.renderFile);
app.set('views', path.join(__dirname,'public'));
app.set('views engine', 'html');


// var travelApp= express();
// var restaurantApp= express();
// var moviesApp=express();
// var carApp=express();
//
// app.use('/travel',travelApp);
// app.use('/restaurants',restaurantApp);
// app.use('/movies',moviesApp);
// app.use('/cars',carApp);
//

app.use(router);

app.listen('3000',function () {
    console.log('Application is running on port 3000');
});
