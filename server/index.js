var express = require('express');
var app = express();

const products = require('./data/conditions.json');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.get('/', function (req, res) {
  res.send('');
});

app.get('/conditions', (req, res) => {
  setTimeout(function () {
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    res.send(products);
  }, 3000);

  return;
});

app.listen(9000, function () {
  console.log('Server listening on port 9000!');
});