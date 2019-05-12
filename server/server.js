const serverConfig = require('../config/config')

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// io = This is the backend communication
//--------------------------------------------
module.exports.io = socketIO(server);
require('./sockets/socket');
//--------------------------------------------

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    //console.log(`Servidor corriendo en puerto ${ port }`);
    console.log('The Basic SOCKET Server PORT enabled on: ', process.env.PORT, )

});