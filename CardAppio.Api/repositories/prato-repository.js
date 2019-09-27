require('../models/prato-model');
const base = require('../bin/base/repository-base');

class pratoRepository{
    constructor(){
        this._base = new base('Prato');
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

    async checkPrato(Id){
        return this._base._base.findOne({id: Id});
    }

    async getPratosByRestauranteId(id){
        try {
            return await this._base._model.find({restauranteId: id});
        } catch (error) {
            console.log('Erro ao buscar modelo: ', error);
            return null;
        }
    }
}

module.exports = pratoRepository;