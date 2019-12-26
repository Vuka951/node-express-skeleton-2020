const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

/**
  * @route {GET} example/
  * @description This is just an example GET route
  * @access public
**/

router.get('/', function(req, res) {
  res.status(200).send('GET response from example');
});

/**
  * @route {POST} example/
  * @description This is just an example POST route
  * @access public
**/

router.post('/', function(req, res) {
  res.status(200).send('POST response from example');
});

/**
  * @route {PUT} example/
  * @description This is just an example PUT route
  * @access public
**/

router.put('/', function(req, res) {
  res.status(200).send('PUT response from example');
});

/**
  * @route {DELETE} example/
  * @description This is just an example DELETE route
  * @access public
**/

router.delete('/', function(req, res) {
  res.status(200).send('DELETE response from example');
});


module.exports = router;
