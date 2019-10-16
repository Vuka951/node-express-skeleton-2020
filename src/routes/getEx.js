import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

/**
  *@route    GET /get
  *@desc     This is just an example comment for routes
  *@access   public
*/

router.get('/', function(req, res) {
  return res.status(200).send('GET response from /get');
});

export default router;
