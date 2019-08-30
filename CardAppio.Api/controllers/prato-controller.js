'use-strict'

const repositorio = require('../repositories/prato-repository');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio()

function pratoController(){

}

pratoController.prototype.post = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.titulo, `O titulo do prato é obrigatório!`);
    _validation.isRequired(data.valor, 'O valor do prato é obrigatório');
    _validation.isRequired(data.tempo, 'O tempo médio é obrigatório');
    _validation.isRequired(data.descricao, 'A descrição do prato é obrigatória');

    let checkPrato = await _repositorio.checkPrato(data.email);
    if (checkPrato) {
        _validation.isTrue((checkPrato.id != undefined), `Prato já cadastrado`);
    }
    
    controllerBase.post(_repositorio, _validation, req, res);
};
pratoController.prototype.put = async (req, res) =>{
    let data = req.body;
    let __validation = new validation();
    let chekcPrato = await _repositorio.checkPrato(req.params.id);

    if (checkPrato) {
        _validation.isTrue((chekcPrato.id == undefined), `Prato não está cadastrado`);
    }

    controllerBase.put(_repositorio, _validation, req, res);
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