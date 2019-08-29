'use-strict'

const repositorio = require('../repositories/prato-repository');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio()

function pratoController(){

}

pratoController.prototype.post = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.prato, `O titulo do prato é obrigatório!`);
    _validation.isRequired(data.valor, 'O valor do prato é obrigatório');

    controllerBase.post(_repositorio, _validation, req, res);
};
pratoController.prototype.put = async (req, res) =>{
    let resultado = await _repositorio.update(req.body);
    return resultado;
};
pratoController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
pratoController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
pratoController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = pratoController;