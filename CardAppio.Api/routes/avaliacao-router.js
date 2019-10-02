'use-strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/avaliacao-controller');

let ctrl = new controller();

router.get('/', ctrl.get);

router.get('/:id', ctrl.getById);

router.get('/getByPedido/:id', ctrl.getByPedidoId);

router.get('/getByRestaurante/:id', ctrl.getByRestauranteId);

router.post('/', ctrl.post);

router.put('/:id', ctrl.put);

router.delete('/:id', ctrl.delete);

module.exports = router;
