var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World its Nelia Again");
});

app.listen(4000);