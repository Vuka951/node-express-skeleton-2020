import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.put('/', function(req, res) {
  return res.send('PUT response from /PUT');
});

export default router;
