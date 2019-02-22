import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', function(req, res) {
  return res.status(200).send('GET response from /get');
});

export default router;
