var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly @dk home');
});

app.listen(process.env.PORT || 4730);