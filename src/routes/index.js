var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json({ message: 'Welcome to Xanbilak 1st API' });
});

module.exports = router;