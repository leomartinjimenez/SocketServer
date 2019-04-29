const serverConfig = require('../config/config')

const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));



app.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    //console.log(`Servidor corriendo en puerto ${ port }`);
    console.log('The Basic SOCKET Server PORT enabled on: ', process.env.PORT, )

});