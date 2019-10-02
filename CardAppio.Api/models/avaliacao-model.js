'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const avaliacaoModel = new schema({
    nota:{required: true, type: Number},
    pedidoId:{required: true, type: String},
    restauranteId:{required: true, type: String}
}, {versionKey: false});

avaliacaoModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataAvaliacao){
        this.dataAvaliacao = agora;
        next();
    }
});

module.exports = mongoose.model('Avaliacao', avaliacaoModel);