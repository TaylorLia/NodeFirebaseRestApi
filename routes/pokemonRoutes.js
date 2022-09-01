// realizando as importações 
const express = require('express')
const {
    addPokemon,
    getAllPokemons,
    getPokemon,
    updatePokemon,
    deletePokemon
} = require('../controllers/pokemonController')

// inicializando as rotas do express
const router = express.Router()

// criando as rotas para o recurso pokemon
// definindo a rota para a listagem de trainadores
router.get('/pokemons',getAllPokemons)

router.get('/pokemons/:id',getPokemon)

//definindo ua nova rota para cadastro de treinadores
router.post('/pokemons',addPokemon)
//definindo a rota para 
router.put('/pokemons/:id',updatePokemon)

router.delete('/pokemons/:id',deletePokemon)

module.exports = {
    routes: router
}