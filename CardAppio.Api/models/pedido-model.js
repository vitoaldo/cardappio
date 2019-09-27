'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pedidoModel = new schema({
    prato:{required: true, type: String},
    valor:{required: true, type: Number},
    dataPedido: {required: true, type: Date, default: Date.now},
    observacao: {type: String},
	clienteId: {required: true, type: String},
	status: {required: false, type: String}
}, {versionKey: false});

pedidoModel.pre('save', next =>{
    let agora = new Date();
    if(!this.dataPedido){
        this.dataPedido = agora;
        next();
    }
});

module.exports = mongoose.model('Pedido', pedidoModel);