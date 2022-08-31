// definindo o strict mode
'use strict'

//definindo imports
const express = require('express')
const cors = require('cors')
const config = require('./config')
const trainerRoutes = require('./routes/trainerRoutes')
const pokemonRoutes = require('./routes/pokemonRoutes')

// inicializando o express
const app = express();

// Definindo a utilização de JSON no corpo da requisição
// (body Parser)
app.use(express.json())

// Definindo a utilização do CORS
// (Frontend)
app.use(cors())

//utilizando as rotas para treinadores
app.use('/api',trainerRoutes.routes)

//utilizando as rotas para treinadores
app.use('/api',pokemonRoutes.routes)

// Definindo a porta onde o servidor estará ouvindo
app.listen(config.port, () =>{
  console.log('Api está rodando em http://localhost:' + config.port)
})

// // Definindo imports
// const express = require('express');
// const cors = require('cors');
// const firebase = require('firebase');

// // Definições de acesso do projeto
// const firebaseConfig = {
//     apiKey: "AIzaSyDbeozm67rPgYsE1L5K93tLGRd-rTznXGs",
//     authDomain: "nodefirebaserestapi.firebaseapp.com",
//     projectId: "nodefirebaserestapi",
//     storageBucket: "nodefirebaserestapi.appspot.com",
//     messagingSenderId: "1057744498141",
//     appId: "1:1057744498141:web:efca5eaed2cbd71e135a34"
//   };

// // inicializando o firebase
// firebase.initializeApp(firebaseConfig);

// 

// //Definir o tipo de bando de dados
// const db = firebase.firestore();

// //definir a coleção do banco de dados
// const User = db.collection('users');

// //Criando uma rota para teste
// // app.get('/', (req,res) => (
// //   //Enviando uma resposta para a requisição
// //   res.send({
// //     msg: "Hello World"
// //   })
// // ));

// //Definindo as rotas para o crud sem definição de recursos!!!

// //Recuerando todos os documentos da coleção
// app.get('/', async (req,res) => {
//   //a constante snapshot ira receber o resultado da busca
//   // da coleção "users"
//   const snapshot = await User.get();
//   console.log(snapshot)
//   // criando o objeto que ira receber o JSON com os documentos da banca
//   const users = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data()
//   }));
//   console.log(users)
//   //enviando para o usuario a resposta da requisição
//   res.send(users) 
// })

// // recuperando um documento em especifico na coleção
// app.get('/:id', async (req,res) =>{
//   //criando uma contante para receber o id da requisição
//   const id = req.params.id;
//   //a constante snapshot ira receber o resultado da busca
//   // da coleção "users"
//   const snapshot = await User.get();
//   // criando o objeto que ira receber o JSON com os documentos da banca
//   const users = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data()
//   }));
//   //filtrando dentro do retorno do banco para encontrar
//   //o documento com o id enviando por paramentro
//   const user = users.filter(() =>{
//     return userId.id == id;
//   }) 
//   // enviando a resposta da requisição
//   res.send(user)
  
// });

// //Salvando as demonstração da seleção
// app.post('/', async (req,res) =>{
//   //criando o corpo da requisição de um objeto
//   const data = req.body
//   console.log(data)
//   //inserir o objeto 'data' na coleção
//   await User.add(data)
//   //enviando uma resposta para a requisição
//   res.send(201)({
//     msg: "Usuário salvo"
//   });
// })

// //atualizando um documento na coleção
// app.put('/:id', async (req,res) =>{
//   const id = req.params.id
//   await User.doc(id).update(req.body)
//   res.send({
//     msg: "Usuario alterado!"
//   })
// })

// //excluindo um documento na coleção
// app.delete('/:id', async (req,res) =>{
//   const id = req.params.id
//   await User.doc(id).delete()
//   res.send({
//     msg: "Usuário excluido!"
//   })
// })



