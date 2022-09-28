// definindo o strict mode
'use strict'

// realizando as importações
const express = require('express')
const controler = require('../controllers/trainerController')

// inicializando as rotas do express
const router = express.Router()

// iniciando um novo objeto da classe trainerController
let _ctrl = new controler()

// definindo as rotas
router.get('/', _ctrl.get)
router.get('id', _ctrl.getById)
router.post('/', _ctrl.post)
router.put('/:id', _ctrl.put)
router.delete('/:id', _ctrl.delete)

// exportando o modulo
module.exports = router