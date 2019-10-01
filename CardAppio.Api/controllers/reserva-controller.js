'use-strict'

const repositorio = require('../repositories/reserva-repository');
const controllerBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repositorio = new repositorio()

function reservaController(){

}

reservaController.prototype.post = async (req, res) =>{
    let data = req.body;
    let _validation = new validation();
    console.log(data);
    let checkReserva = await _repositorio.checkReserva(data.id);
    if (checkReserva) {
        _validation.isTrue((checkReserva.id != undefined), `Reserva já cadastrada`);
    }
    
    controllerBase.post(_repositorio, _validation, req, res);
};
reservaController.prototype.put = async (req, res) =>{
    let data = req.body;
    let __validation = new validation();
    let checkReserva = await _repositorio.checkReserva(req.params.id);

    if (checkReserva) {
        _validation.isTrue((checkReserva.id == undefined), `Reserva não está cadastrada`);
    }

    controllerBase.put(_repositorio, _validation, req, res);
};
reservaController.prototype.get = async (req, res) => {
    controllerBase.get(_repositorio, req, res);
};
reservaController.prototype.getById = async (req, res) => {
    controllerBase.getById(_repositorio, req, res);
};
reservaController.prototype.delete = async (req, res) => {
    controllerBase.delete(_repositorio, req, res);
};

module.exports = reservaController;