var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.sendfile('index.html');
  var test = function('afunction.js');
  if (test == 0)
    console.log('Error');
});

app.get('/submission', function(req, res) {
  res.send('Name: ' + req.query.username + '<br>Privacy: ' 
  	+ req.query.privacy + '<br>Comment: ' + req.query.comment + '<br>'); 
});

app.post('/', function(req, res) {
  res.send('Name: ' + req.body.username + '<br>Comment: ' + req.body.comment + '<br>');
});

app.get('/hi', function(req, res) {
  res.send("Hello World!\n");
});

app.get('/bye', function(req, res){
  res.send("Goodbye Cruel World!\n");
});

app.get('/:id', function(req, res){
	res.send('Hello ' + req.params.id + '!\n');
});


