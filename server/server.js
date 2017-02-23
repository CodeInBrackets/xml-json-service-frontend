var express = require('express');
var path = require('path')
var app = express();

var isDevMode = process.argv.includes('--dev');
var port = process.env.PORT;

if(!port)
    port=3000


if(isDevMode)
    require('./webpack-load')(app);

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/views/index.html'));
});

app.get('/advertiser/', function (req, res) {
    if (req.query.format ==="JSON")
        res.sendFile(path.resolve(__dirname + '/mock-data/response.json'));
    else
        res.sendFile(path.resolve(__dirname + '/mock-data/response.xml'));
});

app.listen(port);