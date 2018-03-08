var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.send('Main Page');
});

module.exports = router;
