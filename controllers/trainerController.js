// definindo o strict mode
'use strict'

// definindo imports
const firebase = require('../db');
const Trainer = require('../models/trainer')
const firestore = firebase.firestore()

// criando o metodo para adicionar um novo treinador
const addTrainer = async(req,res,next) => {
    try {
        // criando uma constante para receber o conteudo da nova constante
        const data = req.body
        // executando o metodo da classe firestore que ira gravar o documento no banco
        await firestore.collection('trainers').doc().set(data)
        res.send[201]('Treinador salvo com sucesso!')

    }
    catch(error){
        res.status[400].send(error.mensage)

    }
}

// criando um metodo para listar todos os trainadores
const getAllTrainers = async(req,res,next) => {
    try {
        // criando os objetos para receber a coleção 'trainers'
        const trainers = await firebase.collection('trainers')
        // criando uma constante para receber os documentos do 
        const docs = trainers.get()
        // criando um array vazio que ra receber os treinadores
        const trainersArray = []
        //testando se ha ou não documentos na coleção
        if (data.empty){
            res.status[404].send('Não há treinadores cadastrados!')
        }else{
            data.forEach.doc => {
                const trainer = new Trainer(
                    doc.id,
                    doc.data().name,
                    doc.data().userName,
                    doc.data().email,
                    doc.data().password,
                    doc.data().birthday,
                    doc.data().age,
                    doc.data().genre,
                    doc.data().city,
                    doc.data().state,
                )
                trainersArray.push(trainer)
            }
            res.status[200].send(trainersArray)
        }
    }
    catch(error) {}
}

// criando um metodo para listar um trainador especifico