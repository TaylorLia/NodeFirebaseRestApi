//Definindo a utilização do 'strict' mode
'use strict'

// Determinando os 'imports'
const firebase = require('../../db')
const firestore = firebase.firestore()

var modelBase

class repositoryBase {
    constructor(model,collection){
        this._model = model,
        this._collection = collection
    }

    async create(data) {
        let res = await firestore.collection(this._collection).doc().set(data)
        return res
    }

    async update(id,data){
        let doc = await firestore.collection(this._collection).doc(id)
        let res = await doc.update(data)
        return res
    }

    async getAll(){
        let all = await firestore.collection(this._collection)
        let res = await all.get()
        let doc = await []
        if (res.empty) {
            return 'Não foram encontrados documentos!'
        } else {
            docArray = res.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))  
            return docArray
        }
    }

    async getById(id){
        let doc = await firestore.collection(this._collection)
        let res = await doc.get()
        if (!res.exists) {
            return 'Não foi encontrado um documento correspondente'
        } else {
            return res.data()
        }
    }

    async delete(id){
        return await firestore.collection(this._collection)
    }
}

module.exports = repositoryBase