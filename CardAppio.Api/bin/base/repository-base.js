'use strict'

const mongoose = require('mongoose');

class baseRepository{
    constructor(model){
        this._model = mongoose.model(model);
    }

    async create(data){
        try{
            let modelo = new this._model(data);
            return await modelo.save();
        }
        catch(error){
            console.log('Erro ao criar modelo: ', error);
        } 
    }

    async update(id, data){
        try {
            await this._model.findByIdAndUpdate(id, { $set: data});
            return this._model.findById(id);
        } catch (error) {
            console.log('Erro ao atualizar modelo: ', error);
            return null;
        }
    }

    async get(){
        try {
            return await this._model.find();
        } catch (error) {
            console.log('Erro ao listar modelo: ', error);
            return null;
        } 
    }

    async getById(id){
        try {
            return await this._model.findById(id);
        } catch (error) {
            console.log('Erro ao buscar modelo: ', error);
            return null;
        }
    }

    async delete(id){
        try {
            return await this._model.findByIdAndRemove(id);
        } catch (error) {
            console.log('Erro ao remover modelo: ', error);
            return null;
        }
    }
}

module.exports = baseRepository;