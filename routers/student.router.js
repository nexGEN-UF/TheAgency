var express = require('express');
var router = express.Router();
var Student = require('../models/student.model');

router.get('/students', function(req, res){
  Student.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        students: documents
      });
    }
  });
});

module.exports = router;
