// definindo imports
const firebase = require('firebase')
const config = require('./config')

//Inicializando o firebase
const db = firebase.initializeApp(config.firebaseConfig)

//Exportando o modelo
module.exports = db