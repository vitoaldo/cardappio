'use-strict'

const repositorio = require('../repositories/cliente-repository');
const validation = require('../bin/helpers/validation');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio();

function clienteController() {

}

clienteController.prototype.autenticar = async (req, res) =>{
    let _validation = new validation();
    _validation.isEmail(req.email, 'O email não é valido');
    _validation.isRequired(req.email, 'É necessário informar um email');
    _validation.isRequired(req.senha, 'É necessário informar uma senha');

    let resultado = _repositorio.authenticate(req.email, req.senha);

    if(resultado){
        return res.status(200).send(resultado);
    }
    return null;
}

clienteController.prototype.post = async (req, res) => {
    let data = req.body;
    let _validation = new validation();
    _validation.isRequired(data.email, 'Informe o email')
    _validation.isEmail(data.email, 'Email invalido');
    _validation.isRequired(data.senha, 'Informe a senha');

    let checkUsuario = await _repositorio.checkEmailExiste(data.email);
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