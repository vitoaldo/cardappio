'use-strict'

const repositorio = require('../repositories/cliente-repository');
const validation = require('../bin/helpers/validation');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio();

function clienteController() {

}

clienteController.prototype.post = async (req, res) => {
    let data = req.body;
    let _validation = new validation();
    _validation.isRequired(data.email, 'Informe o email')
    _validation.isEmail(data.email, 'Email invalido');
    _validation.isRequired(data.senha, 'Informe a senha');

    let checkUsuario = await _repositorio.isEmail(data.email)
    if (checkUsuario) {
        _validation.isTrue((checkUsuario.email != undefined), `Usuario já cadastrado com o email ${data.email}`);
    }

    controllerBase.post(_repositorio, _validation, req, res);
};
clienteController.prototype.put = async (req, res) => {
    let data = req.body;
    let _validation = new validation();
    let checkUsuario = await _repositorio.getById(req.params.id);

    if(checkUsuario){
        _validation.isTrue((checkUsuario.id == undefined), `Usuario não está cadastrado`);
    }

    controllerBase.put(_repositorio, _validation, req, res);
};
clienteController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
clienteController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
clienteController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = clienteController;