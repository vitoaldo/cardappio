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


    let checkFavorito = await _repositorio.checkFavorito(data.id);
    if (checkFavorito) {
        _validation.isTrue((checkFavorito.id != undefined), `Favorito já cadastrado`);
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