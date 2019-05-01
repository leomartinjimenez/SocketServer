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
let io = socketIO(server);

// on is to LISTEN the CLIENT messages
io.on('connection', (client)=>{
    console.log('User has just CONNECTED')
    
    // emit is to SEND messages to the CLIENT
    client.emit('sendMessageFromClient',{
        username: 'Admin',
        message: 'Wellcome to the CHAT !!!'
    })


    client.on('disconnect', ()=>{
        console.log('User has just DISCONNECTED')
    
    })

    // on is to LISTEN the CLIENT messages
    client.on('sendMessageFromClient', (message)=>{
        console.log(message)
    })

})

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    //console.log(`Servidor corriendo en puerto ${ port }`);
    console.log('The Basic SOCKET Server PORT enabled on: ', process.env.PORT, )

});