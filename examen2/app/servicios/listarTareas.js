var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const listarTareas = require('../schema/modeloTarea');


router.get("/recibir", function(req, res) { 

    listarTareas.find()
      .exec()
  
      .then(function(result) {
        res.json(result);
      })
  
      .catch(function(err) {
        console.log(err);
      });
  
  
  });
  
  module.exports = router;