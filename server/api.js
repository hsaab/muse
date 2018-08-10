var express = require("express");
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

module.exports = function(db){

  return router;
}
