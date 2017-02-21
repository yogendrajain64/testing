// create a new app
var express = require('express');
var app = express();
var controller = require('./controller.js');
var filter = require('./filter.js');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/itemdetails");

app.use('/controller', controller.index);
app.use('/filter', filter);

app.listen(8080);
