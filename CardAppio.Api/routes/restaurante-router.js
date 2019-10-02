'use-strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurante-controller');

let ctrl = new controller();

router.get('/', ctrl.get);

router.get('/:id', ctrl.getById);

router.post('/', ctrl.post);

router.post('/getRestauranteByName', ctrl.getRestauranteByName);

router.put('/:id', ctrl.put);

router.delete('/:id', ctrl.delete);

// router.autenticar ('/autenticar', ctrl.autenticar);

module.exports = router;
