import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.delete('/', function(req, res) {
  return res.status(200).send('DELETE response from /delete');
});

export default router;
