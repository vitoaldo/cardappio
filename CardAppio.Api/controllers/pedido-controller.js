'use-strict'

const repositorio = require('../repositories/pedido-repository');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio();

function pedidoController(){

}

pedidoController.prototype.post = async (req, res) =>{
    let resultado = await _repositorio.create(req.body);
    return resultado;
};
pedidoController.prototype.put = async (req, res) =>{
    let resultado = await _repositorio.update(req.body);
    return resultado;
};
pedidoController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
pedidoController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
pedidoController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = pedidoController;