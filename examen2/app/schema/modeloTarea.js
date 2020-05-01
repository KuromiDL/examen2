var mongoose = require("mongoose");

var tareaSchemas = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre:String,
  fechaTarea:Date,
  descripcion:String,
  prioridad:String,
  encargado:String
});

module.exports = mongoose.model( "Tarea", tareaSchemas,"Tareas");
