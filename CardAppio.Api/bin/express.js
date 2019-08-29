const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//Rotas
const restauranteRouter = require('../routes/restaurante-router');
const clienteRouter = require('../routes/cliente-router');
const pratoRouter = require('../routes/prato-router');
const pedidoRouter = require('../routes/pedido-router');

const app = express();

//Config de parse do Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Criando conexão com MongoDB
mongoose.connect(variables.Database.connection, { useNewUrlParser: true });

//Config rotas
app.use('/api/restaurante', restauranteRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/pedido', pedidoRouter);
app.use('/api/prato', pratoRouter);

module.exports = app;