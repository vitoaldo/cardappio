'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const restauranteModel = new schema({
    nome:{required: true, type: String},
    local:{required: true, type: String},
    foto:{type:String},
    dataCadastro:{type:Date, default: Date.now},
    quantidadeMesas:{type: Number, required:true},
    email:{type: String, required:true},
    senha:{type: String, required:true}
}, {versionKey: false});

restauranteModel.pre('save', next => {
    let agora = new Date();

    if(!this.dataCadastro){
        this.dataCadastro = agora;
        next();
    }
});

module.exports = mongoose.model('Restaurante', restauranteModel);