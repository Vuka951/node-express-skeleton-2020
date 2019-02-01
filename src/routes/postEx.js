import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

export default router;
