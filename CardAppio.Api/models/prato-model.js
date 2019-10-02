'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pratoModel = new schema({
    titulo: {type: String, required: true, index: true},
    valor: {type: Number, required: true},
    tempo: {type: Number, required: true},
    descricao: {type: String, required: true},
    dataCadastro: {type: Date, required: true, default: Date.now},
    restauranteId: {type: String, required: true},
    foto: {type: String}
}, {versionKey: false});

pratoModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataCadastro){
        this.dataCadastro = agora;
        next();
    }
});

module.exports = mongoose.model('Prato', pratoModel);