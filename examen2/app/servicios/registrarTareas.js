var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var registroTarea = require('../schema/modeloTarea');

router.post('/insertar', function(req, res) {
  var tareaNueva = new registroTarea({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    fechaTarea: req.body.fechaTarea,
    descripcion: req.body.descripcion,
    prioridad: req.body.prioridad,
    encargado: req.body.encargado
  });
  tareaNueva.save()
    .then(function(result) {
      res.json(result);
    })
    .catch(function(error) {
      console.log(error);
    });
});
module.exports = router;
