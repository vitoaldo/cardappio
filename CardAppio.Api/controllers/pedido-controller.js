'use-strict'

const repositorio = require('../repositories/pedido-repository');

const _repositorio = new repositorio();

function pedidoController(){

}

pedidoController.prototype.post = async (req, res) =>{
    let resultado = await _repositorio.post(req.body);
    return resultado;
};
pedidoController.prototype.put = async (req, res) =>{
    let resultado = await _repositorio.update(req.body);
    return resultado;
};
pedidoController.prototype.get = async (req, res) =>{
    let resultado = await _repositorio.get(req.body);
    return resultado;
};
pedidoController.prototype.getById = async (req, res) =>{
    let resultado = await _repositorio.getById(req.body);
    return resultado;
};
pedidoController.prototype.delete = async (req, res) =>{
    let resultado = await _repositorio.delete(req.body);
    return resultado;
};

module.exports = pedidoController;