'use-strict'

const repositorio = require('../repositories/restaurante-repository');

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
restauranteController.prototype.get = async (req, res) =>{
    let resultado = await _repositorio.get(req.body);
    return resultado;
};
restauranteController.prototype.getById = async (req, res) =>{
    let resultado = await _repositorio.getById(req.body);
    return resultado;
};
restauranteController.prototype.delete = async (req, res) =>{
    let resultado = await _repositorio.delete(req.body);
    return resultado;
};

module.exports = restauranteController;