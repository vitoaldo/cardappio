'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const clienteModel = new schema({
    nomeCompleto: {required: true, index: true, type: String },
    email: {required: true, type: String},
    senha: {required: true, type: String},
    dataCadastro: {required: true, type: Date, default: Date.now},
    foto: {type: String, required:true}
}, {versionKey: false});

clienteModel.pre('save', next => {
    let agora = new Date();
    if(!this.dataCadastro){
        this.dataCadastro = agora;
        next();
        }
});

module.exports = mongoose.model('Cliente', clienteModel);