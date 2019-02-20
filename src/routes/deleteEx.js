import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.delete('/', function(req, res) {
  return res.send('DELETE response from /delete');
});

export default router;
