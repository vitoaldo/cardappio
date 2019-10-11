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
    controllerBase.post(_repositorio, _validation, req, res);
};

pedidoController.prototype.changeStatus = async (req, res) => {
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.id, 'O id é obrigatório!');
    _validation.isRequired(data.status, 'O status é obrigatório');

    let pedido = await _repositorio.changeStatus(data.id, data.status);

    if (pedido) {
        return res.status(201).send(pedido);
    }
  
    return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
};

pedidoController.prototype.pagar = async (req, res) => {
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.clienteId, 'O id é obrigatório!');

    let pedido = await _repositorio.pagar(data.clienteId);
        console.log(pedido);

    if (pedido) {
        return res.status(201).send(pedido);
    }
  
    return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
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
  
    return res.status(500).send({message: 'Erro no processamento do metodo GET'});
};

pedidoController.prototype.getByRestauranteId = async (req, res) => {
    let data = req.params;
  
    let pedidos = await _repositorio.getByRestauranteId(data.id);

    if (pedidos) {
        return res.status(201).send(pedidos);
    }
  
    return res.status(500).send({message: 'Erro no processamento do metodo GET'});
};

pedidoController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = pedidoController;