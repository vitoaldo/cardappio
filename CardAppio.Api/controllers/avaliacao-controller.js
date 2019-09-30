'use-strict'

const repositorio = require('../repositories/avaliacao-repository');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio();
const validation = require('../bin/helpers/validation');

function avaliacaoController() {

}

avaliacaoController.prototype.post = async (req, res) => {
    let data = req.body;
    let _validation = new validation();

    let checkAvaliacao = await _repositorio.checkAvaliacao(data.pedidoId);

    if (checkAvaliacao) {
        let avalicao = await _repositorio.update(checkAvaliacao.id, data);

        if (avalicao) {
            return res.status(201).send(avalicao);
        }
      
        return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
    }
    controllerBase.post(_repositorio, _validation, req, res);
};

avaliacaoController.prototype.put = async (req, res) => {
    let __validation = new validation();
    let checkavaliacao = await _repositorio.checkAvaliacao(req.params.id);

    if (checkavaliacao) {
        _validation.isTrue((checkavaliacao.id == undefined), `avaliacao não está cadastrado`);
    }

    controllerBase.put(_repositorio, _validation, req, res);
};

avaliacaoController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};

avaliacaoController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};

avaliacaoController.prototype.getByPedidoId = async (req, res) => {
    let data = req.params;

    let avalicao = await _repositorio.checkAvaliacao(data.id);

    if (avalicao) {
        return res.status(201).send(avalicao);
    }
  
    return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
};

avaliacaoController.prototype.getByRestauranteId = async (req, res) => {
    let data = req.params;

    let avalicoes = await _repositorio.getByRestauranteId(data.id);

    if (avalicoes) {
        return res.status(201).send(avalicoes);
    }
  
    return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
};

avaliacaoController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = avaliacaoController;