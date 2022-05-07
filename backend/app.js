var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

const cors = require('cors');

const helmet = require('helmet');

var indexRouter = require('./routes/index');

const bodyParser = require('body-parser');

// Create an instance of the http server to handle HTTP requests
let app = express();

app.use(cors({
    origin: '*'
}))

app.use('/', indexRouter);

app.use('/characters', indexRouter);

app.use(helmet())


// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());

// adding morgan to log HTTP requests
//app.use(morgan('combined'));

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');