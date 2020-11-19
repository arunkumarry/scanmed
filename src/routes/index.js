var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.status(200).send({message: 'Welcome to scanmed!!!'});
});

module.exports = router;
