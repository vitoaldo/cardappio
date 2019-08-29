'use-strict'

const repositorio = require('../repositories/pedido-repository');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio();
const validation = require('../bin/helpers/validation');

function pedidoController() {

}

pedidoController.prototype.post = async (req, res) => {
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.prato, `O titulo do prato é obrigatório!`);
    _validation.isRequired(data.valor, 'O valor do prato é obrigatório');

    controllerBase.post(_repositorio, _validation, req, res);
};
pedidoController.prototype.put = async (req, res) => {
    let data = req.body;
    let __validation = new validation();
    let checkPrato = await _repositorio.checkPrato(req.params.id);

    if (checkPrato) {
        
    }
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