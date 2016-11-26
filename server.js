var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var data = require('./dummy-data');

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res) {
    res.sendFile('views/index.html', { root: __dirname });
});

app.get('/admin', function(req, res) {
    res.sendFile('views/admin.html', { root: __dirname });
});

app.get('/heatmap', function(req, res) {
    // io.emit("voting", true);
    res.json(data);
});

io.on('connection', function (socket) {
    socket.on('book', function(data) {
        //socket.emit('booking-made', res.name);
        //io.emit('booking-broadcast', res.votes);
    });
    /*socket.on('get-results', function() {
        socket.emit('results', {});
    });
    socket.on('get-votes', function() {
        socket.emit('votes', {});
    });*/
});

var port = process.env.PORT||3000;
http.listen(port, function() {
    console.log('listening on *:3000');
});


