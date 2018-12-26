import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.delete('/', function(req, res) {
  res.send('Got a DELETE request at /user');
});

export default router;
