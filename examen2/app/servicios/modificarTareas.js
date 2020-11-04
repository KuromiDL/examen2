var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ModificarTareas = require("../schema/modeloTarea");


router.put('/editar/:id', function (req, res) {

    ModificarTareas.updateOne({ _id: req.params.id },
        { $set: req.body },
        function (error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'Fallo al modificar',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    info: info
                })
            }
        }
    )

});
//lol


router.post("/recibir", function (req, res) {
    id = req.body._id

    ModificarTareas
        .find({ _id: id })
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (error) {
            console.log(error);
        });
});

module.exports = router;
