'use-strict'

const repositorio = require('../repositories/restaurante-repository');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio()

function restauranteController(){

}

restauranteController.prototype.post = async (req, res) =>{
    let resultado = await _repositorio.create(req.body);
    return resultado;
};
restauranteController.prototype.put = async (req, res) =>{
    let resultado = await _repositorio.update(req.body);
    return resultado;
};
restauranteController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
restauranteController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
restauranteController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = restauranteController;