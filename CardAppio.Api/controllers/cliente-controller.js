'use-strict'

const repositorio = require('../repositories/cliente-repository');

const _repositorio = new repositorio();

function clienteController(){

}

clienteController.prototype.post = async (req, res) =>{
    let resultado = await _repositorio.create(req.body);
    return resultado;
};
clienteController.prototype.put = async (req, res) =>{
    let resultado = await _repositorio.update(req.body);
    return resultado;
};
clienteController.prototype.get = async (req, res) =>{
    let resultado = await _repositorio.get(req.body);
    return resultado;
};
clienteController.prototype.getById = async (req, res) =>{
    let resultado = await _repositorio.getById(req.body);
    return resultado;
};
clienteController.prototype.delete = async (req, res) =>{
    let resultado = await _repositorio.delete(req.body);
    return resultado;
};

module.exports = clienteController;