var express = require('express');
var app = express();
var port = 8000;

app.use(express.static('public'));

app.listen(port, function() {
  console.log("Running on port", port);
})
