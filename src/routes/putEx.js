import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.put('/', function(req, res) {
  res.send('Got a PUT request at');
});

export default router;
