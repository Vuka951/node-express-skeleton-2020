import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', function(req, res) {
  return res.send('GET response from /get');
});

export default router;
