// Package Imports
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
// dotenv initialize
require('dotenv').config();

// Route Imports
const example = require('./routes/example');

// App Definition
const app = express();

// Middleware setup
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('short'));
// Cors Set Up
// List of origins to accept requests from
const whitelist = ['sitetowhitelit.com'];

// eslint-disable-next-line no-unused-vars
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors());

const numberOfRequestsLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 200, // start blocking after X requests
  message: 'Too Many Requsts',
});

// Routes
app.use('/example', numberOfRequestsLimit, example);

// Error handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(process.env.PORT, () => console.log(`Running for my life on ${process.env.PORT}`));
