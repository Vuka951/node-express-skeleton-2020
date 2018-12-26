import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Birds home page');
});

export default router;
