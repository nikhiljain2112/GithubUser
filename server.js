var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));

var server = app.listen(3000, function() {

    var port = server.address().port;

    app.get('/', function(req, res) {
       res.sendFile('public/getUser.html', {root: __dirname })
    });

    console.log('Example app listening at http://localhost:'+port);
});