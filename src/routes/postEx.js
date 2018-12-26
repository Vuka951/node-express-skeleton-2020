import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', function(req, res) {
  res.send('Got a POST request');
});

export default router;
