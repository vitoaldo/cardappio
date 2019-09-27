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

    let checkPedido = await _repositorio.checkPedido(data.email);
    if (checkPedido) {
        _validation.isTrue((checkPedido.id == undefined), `Pedido já cadastrado`);
    }

    controllerBase.post(_repositorio, _validation, req, res);
};
pedidoController.prototype.put = async (req, res) => {
    let data = req.body;
    let __validation = new validation();
    let checkPedido = await _repositorio.checkPedido(req.params.id);

    if (checkPedido) {
        _validation.isTrue((checkPedido.id == undefined), `Pedido não está cadastrado`);
    }

    controllerBase.put(_repositorio, _validation, req, res);
};
pedidoController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
pedidoController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
pedidoController.prototype.getByClienteId = async (req, res) => {
    let data = req.params;
  
    let pedidos = await _repositorio.getByClienteId(data.id);

    if (pedidos) {
        return res.status(201).send(pedidos);
    }
  
    return res.status(500).send({message: 'Erro no processamento do metodo GET'}) 
};
pedidoController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = pedidoController;