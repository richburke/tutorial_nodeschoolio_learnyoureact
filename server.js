'use strict';

var express = require('express');
var app = express();

const PORT = 3000;
const EXERCISE = 2;

app.set('port', (process.argv[2] || PORT));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel-core/register')({
    ignore: false
});

app.use('/', function(req, res) {
  res.render('index' + EXERCISE, '');
});

app.listen(app.get('port'), function() {});
