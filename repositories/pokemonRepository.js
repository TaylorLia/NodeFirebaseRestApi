'use strict'

// Definindo imports
const firebase = require('../db')
const firestore = firebase.firestore()
const pokemons = require('../models/pokemons')

class pokemonsRepository {
    constructor () {}

    //o create será responsavel por receber do controler o req.body com os dados e fazer a chamada com o firestore para a persistencia dos dados
    async create(data) {
        let res = await firestore.collection('pokemons').doc().set(data);
        return res
    }

    async update(id,data) {
        let pokemons = await firestore.collection('pokemons').doc(id)
        let res = await pokemons.update(data)
        return res
    }

    async getAll() {
        let pokemons = await firestore.collection('pokemons')
        let res = await pokemons.get()
        return res
    }

    async getById(id) {
        let pokemons = await firestore.collection('pokemons').doc(id)
        let res = await pokemons.get()
        return res
        // return await pokemons.get()
    }

    async delete(id) {
        return await firestore.collection('pokemons').doc(id).delete()
    }
}

module.exports = pokemonsRepository