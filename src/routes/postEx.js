import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', function(req, res) {
  return res.status(200).send('POST response from /post');
});

export default router;
