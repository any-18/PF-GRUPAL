const express= require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const server= express();



require('./db.js');

server.use(morgan('dev'));

// limitar las peticiones a mi sitio
server.use(cors())

//server.use(express.static('client'));

//parceo de los req
server.use(express.json() );

// rutas

server.use('/auth', require('./routes/auth') );

server.use('/safe_place',require ('./routes/safeplace'))

server.use("/email", require("./routes/nodemailer"))

server.use("/delete_safe_place", require("./routes/safeplace"))

server.use('/user', require('./routes/user'));


module.exports = server;