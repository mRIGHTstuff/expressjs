var express = require('express')
var app = express()
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {title: 'Hey', message: 'Hello ' + req.param('name'), youAreUsingPug: true})
})

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
