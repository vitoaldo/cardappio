require('../models/favorito-model');
const base = require('../bin/base/repository-base');

class favoritoRepository
{
    constructor(){
        this._base = new base('Favorito');
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

    async checkFavorito(Id){
        return this._base._model.findOne({id: Id});
    }

    async checkIfFavoritoRestaurante(clienteId, restauranteId){
        return this._base._model.findOne({clienteId: clienteId, restauranteId: restauranteId});
    } 

    async deleteByClientIdAndRestauranteId(clienteId, restauranteId){
        return this._base._model.deleteMany({clienteId: clienteId, restauranteId: restauranteId});
    }

    async getRestaurantesByClientId(clienteId){
        return this._base._model.find({clienteId: clienteId}, {restauranteId: 1});
    }
}

module.exports = favoritoRepository
;