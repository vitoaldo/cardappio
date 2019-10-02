require('../models/pedido-model');
const base = require('../bin/base/repository-base');

class pedidoRepository{
    constructor(){
        this._base = new base('Pedido');
    }

    async create(data){
        return await this._base.create(data);
    }

    async update(id, data){
        return await this._base.update(id,data);
    }

    async changeStatus(id, status){
        return await this._base.update(id, {status: status});
    }

    async get(){
        return await this._base.get();
    }

    async getById(id){
        return await this._base.getById(id);
    }

    async getByClienteId(clienteId) {
        return await this._base._model.find({clienteId: clienteId});
    }

    async delete(id){
        return await this._base.delete(id);
    }

    async checkPedido(Id){
        return this._base._model.findOne({id: Id});
    }

    async pagar(clienteId){
        return this._base._model.updateMany(
            {
                clienteId : clienteId,
                status: { $ne: 'Cancelado' }
            },
            {
                $set :
                {
                    status : "Concluído"
                }
            }
        );
    }
}

module.exports = pedidoRepository;