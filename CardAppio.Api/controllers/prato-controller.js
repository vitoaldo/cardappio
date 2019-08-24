'use-strict'

const repositorio = require('../repositories/prato-repository');

const _repositorio = new repositorio()

function pratoController(){

}

pratoController.prototype.post = async (req, res) =>{
    let resultado = await _repositorio.create(req.body);
    return resultado;
};
pratoController.prototype.put = async (req, res) =>{
    let resultado = await _repositorio.update(req.body);
    return resultado;
};
pratoController.prototype.get = async (req, res) =>{
    let resultado = await _repositorio.get(req.body);
    return resultado;
};
pratoController.prototype.getById = async (req, res) =>{
    let resultado = await _repositorio.getById(req.body);
    return resultado;
};
pratoController.prototype.delete = async (req, res) =>{
    let resultado = await _repositorio.delete(req.body);
    return resultado;
};

module.exports = pratoController;