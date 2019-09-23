'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const favoritoModel = new schema({
    clienteId: { required: true, type: String },
    restauranteId: { required: true, type: String },
}, { versionKey: false });

clienteModel.pre(next => {
    next();
});

module.exports = mongoose.model('Favorito', favoritoModel);