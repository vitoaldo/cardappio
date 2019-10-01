'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reservaModel = new schema({
    clienteId: {required: true, type: String },
    restauranteId: {required: true, type: String},
    quantidadePessoas: {required: true, type: Number},
    dataReserva: {required: true, type: Date},
}, {versionKey: false});

module.exports = mongoose.model('Reserva', reservaModel);