const express = require('express');


/* Global Path setup for easy require */
global.__base = __dirname + '/';

const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const mongo = require(__base + './models/mongodb');
const path = require('path');
const routes = require('./routes/get')(app);




// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const form = require('./modules/form')(app,mongo)

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));




/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log('API running on localhost:' + port));
