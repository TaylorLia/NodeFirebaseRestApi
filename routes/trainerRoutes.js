// realizando as importações 
const express = require('express')
const {
    addTrainer,
    getAllTrainers,
    getTrainer,
    updateTrainer,
    deleteTrainer
} = require('../controllers/trainerController')

// inicializando as rotas do express
const router = express.Router()

// criando as rotas para o recurso trainer
// definindo a rota para a listagem de trainadores
router.get('/trainers',getAllTrainers)

router.get('/trainers/:id',getTrainer)

//definindo ua nova rota para cadastro de treinadores
router.post('/trainers',addTrainer)
//definindo a rota para 
router.put('/trainers/:id',updateTrainer)

router.delete('/trainers/:id',deleteTrainer)

module.exports = {
    routes: router
}