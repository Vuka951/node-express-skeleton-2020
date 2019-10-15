import express from 'express';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import path from 'path';

// Imported Routes
import getEx from './routes/getEx';
import postEx from './routes/postEx';
import putEx from './routes/putEx';
import deleteEx from './routes/deleteEx';

dotenv.config();
const app = express();
// Middleware setup
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('short'));

// Cors Set Up
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
app.use('/get', numberOfRequestsLimit, getEx);
app.use('/post', numberOfRequestsLimit, postEx);
app.use('/put', numberOfRequestsLimit, putEx);
app.use('/delete', numberOfRequestsLimit, deleteEx);

// if the request is aborted half way or there are other issues this functions handles it so the app doesnt crash
app.use(function(err, req, res, next) {
  if (err.status && err.status < 500) {
    return res.status(400).send('Request Aborted');
  }
});

app.listen(3000, () => console.log('Running for my life on :3000'));
