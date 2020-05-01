var express = require("express");
var router = express.Router();


var EliminarTareas = require('../schema/modeloTarea');

router.delete('/borrar/:id', async (req, res) => {
    const EliminarTareas = await EliminarTareas.findByIdAndDelete(req.params.id); 
    res.json({message: 'Tarea Eliminada'});
  
});

module.exports = router;
