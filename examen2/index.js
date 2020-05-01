var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ale:cenfo@cluster0-qegnm.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log(`Base de datos conectada`))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))

    app.use('/listarTareas', require('./app/servicios/listarTareas'));
    app.use('/eliminarTareas', require('./app/servicios/eliminarTareas'));
    app.use('/modificarTareas', require('./app/servicios/modificarTareas'));
    app.use('/registroTareas', require('./app/servicios/registrarTareas'));

    app.listen(5000, function () {
        console.log("servidor corriendo en el puerto 5000")
    });
