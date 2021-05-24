var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketio(server);

server.listen(3000, () => console.log('listening on *:3000'));

// For POST-Support
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api_node/api1', (req, res) => {
  res.send('API 1')
})

app.post('/api_node/api2', async(req, res) => {
  res.send({ message: "API 2" });
});

io.on('connection', async (socket) => {
  let handshake = socket.handshake;

  console.log(`Socket ${socket.id} connection`)

  socket.emit('message', { message: 'message' });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected.`);
  });
});