'use-strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedido-controller');

let ctrl = new controller();

router.get('/', ctrl.get);

router.get('/:id', ctrl.getById);

router.get('/byCliente/:id', ctrl.getByClienteId);

router.post('/', ctrl.post);

router.post('/changeStatus/', ctrl.changeStatus);

router.post('/pagar/', ctrl.pagar);

router.put('/:id', ctrl.put);

router.delete('/:id', ctrl.delete);

module.exports = router;
