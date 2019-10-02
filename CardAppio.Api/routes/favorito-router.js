'use-strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/favorito-controller');

let ctrl = new controller();

router.get('/', ctrl.get);

router.get('/:id', ctrl.getById);

router.post('/', ctrl.post);

router.post('/findRestaurante', ctrl.findIfFavorito);
router.post('/getRestauranteByClientId', ctrl.getRestaurantesByClientId);
router.post('/delete', ctrl.deleteByClientIdAndRestauranteId);

router.put('/:id', ctrl.put);

router.delete('/:id', ctrl.delete);

module.exports = router;
