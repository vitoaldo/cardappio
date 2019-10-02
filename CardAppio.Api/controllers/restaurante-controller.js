'use-strict'

const repositorio = require('../repositories/restaurante-repository');
const validation = require('../bin/helpers/validation');
const controllerBase = require('../bin/base/controller-base');
const _repositorio = new repositorio()

function restauranteController(){

}

restauranteController.prototype.autenticar = async (req, res) => {
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

restauranteController.prototype.post = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    _validation.isRequired(data.nome, `O titulo do prato é obrigatório!`);
    _validation.isRequired(data.local, 'Local do restaurante é obrigatório');
    _validation.isRequired(data.quantidadeMesas, 'Deve ser definida a quantidade de mesas dedicadas');
    _validation.isRequired(data.email, 'O email é obrigatório');
    _validation.isRequired(data.senha, 'senha é obrigatória');
    
    let checkRestaurante = await _repositorio.checkRestaurante(data.email);
    if (checkRestaurante) {
        _validation.isTrue((checkRestaurante.id != undefined), `Restaurante já cadastrado com o email ${data.email}`);
    }
    
    controllerBase.post(_repositorio, _validation, req, res);
};
restauranteController.prototype.put = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();

    controllerBase.put(_repositorio, _validation, req, res);
};
restauranteController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
restauranteController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
restauranteController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = restauranteController;