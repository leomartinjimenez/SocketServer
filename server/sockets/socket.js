const { io } = require('../server')

// on is to LISTEN the CLIENT messages
io.on('connection', (client) => {
    console.log('User has just CONNECTED')

    // emit is to SEND messages to the CLIENT
    client.emit('sendMessageFromClient', {
        username: 'Admin',
        message: 'Wellcome to the CHAT !!!'
    })


    client.on('disconnect', () => {
        console.log('User has just DISCONNECTED')

    })

    // on is to LISTEN the CLIENT messages
    client.on('sendMessageFromClient', (data, callback) => {

        console.log(data)

        // Send messages to ALL the connected USER within the CHAT
        //------------------------------
        client.broadcast.emit('sendMessageFromClient', data)
            //------------------------------

        /*
        if (message.username) {
            callback({
                response: 'All is RIGHT ;)'
            })
        } else {
            callback({
                response: 'All is WRONG :( '
            })
        }
        */

    })

})