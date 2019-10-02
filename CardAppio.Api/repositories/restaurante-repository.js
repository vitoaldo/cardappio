require('../models/restaurante-model');
const base = require('../bin/base/repository-base');

class restauranteRepository{
    constructor(){
        this._base = new base('Restaurante');
    }

    async authenticate(Email, Senha){
        this._base._model.findOne({email: Email, senha: Senha});
    }

    async create(data){
        return await this._base.create(data);
    }

    async update(id, data){
        return await this._base.update(id,data);
    }

    async get(){
        return await this._base.get();
    }

    async getById(id){
        return await this._base.getById(id);
    }

    async delete(id){
        return await this._base.delete(id);
    }

    async checkRestaurante(Id){
        return this._base._model.findOne({id: Id});
    }

    async getRestauranteByName(name){
        return this._base._model.find({nome: name});
    }
}

module.exports = restauranteRepository;