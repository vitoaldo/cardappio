'use-strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/prato-controller');

let ctrl = new controller();

router.get('/', ctrl.get);

router.get('/:id', ctrl.getById);

router.get('/restaurante/:id', ctrl.getByRestauranteId);

router.post('/', ctrl.post);

router.put('/:id', ctrl.put);

router.delete('/:id', ctrl.delete);

module.exports = router;
