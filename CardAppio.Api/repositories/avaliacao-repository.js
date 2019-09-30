require('../models/avaliacao-model');
const base = require('../bin/base/repository-base');

class avaliacaoRepository{
    constructor(){
        this._base = new base('Avaliacao');
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

    async checkAvaliacao(id){
        return this._base._model.findOne({pedidoId: id});
    }

    async getByRestauranteId(id){
        return this._base._model.find({restauranteId: id});
    }
}

module.exports = avaliacaoRepository;