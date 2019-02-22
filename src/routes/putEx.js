import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.put('/', function(req, res) {
  return res.status(200).send('PUT response from /PUT');
});

export default router;
