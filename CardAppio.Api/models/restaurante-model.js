'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const restauranteModel = new schema({
    nome:{index: true, required: true, type: string},
    local:{required: true, type: string},
    foto:{type:string, required: true},
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