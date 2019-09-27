'use-strict'

const repositorio = require('../repositories/favorito-repository');
const controllerBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repositorio = new repositorio()

function favoritoController(){

}

favoritoController.prototype.post = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.clienteId, `O clienteId é obrigatório!`);
    _validation.isRequired(data.restauranteId, 'O restauranteId é obrigatório');

    let checkFavorito = await _repositorio.checkFavorito(data.id);

    if (checkFavorito) {
        _validation.isTrue((checkFavorito.id == undefined), `Favorito já cadastrado`);
    }
    
    controllerBase.post(_repositorio, _validation, req, res);
};
favoritoController.prototype.put = async (req, res) =>{
    let data = req.body;
    let __validation = new validation();
    let checkFavorito = await _repositorio.checkFavorito(req.params.id);

    if (checkFavorito) {
        _validation.isTrue((checkFavorito.id == undefined), `Favorito não está cadastrado`);
    }

    controllerBase.put(_repositorio, _validation, req, res);
};

favoritoController.prototype.findIfFavorito = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.clienteId, `O clienteId é obrigatório!`);
    _validation.isRequired(data.restauranteId, 'O restauranteId é obrigatório');

    let hasRestaurante = await _repositorio.checkIfFavoritoRestaurante(data.clienteId, data.restauranteId);
    if (hasRestaurante) {
        return res.status(201).send(true);
    }
    return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
};

favoritoController.prototype.getRestaurantesByClientId = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.clienteId, `O clienteId é obrigatório!`);

    let restaurantesIds = await _repositorio.getRestaurantesByClientId(data.clienteId);
    if (restaurantesIds) {
        return res.status(201).send(restaurantesIds);
    }
    return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
};

favoritoController.prototype.deleteByClientIdAndRestauranteId = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    let resolution = await _repositorio.deleteByClientIdAndRestauranteId(data.clienteId, data.restauranteId);
    if (resolution) {
        return res.status(201).send(resolution);
    }
    return res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
};

favoritoController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
favoritoController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
favoritoController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};


module.exports = favoritoController;