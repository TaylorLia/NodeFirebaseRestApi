//definindo o strict mode do JS
'use strict'

// realizando as importações
const dotenv = require('dotenv')
const assert = require('assert')

// configurando o dotenv
dotenv.config()

// criando o objeto que ira conter as variaveis de ambiente
const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROTECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env

//definindo obrigatoriedade de parametros
assert(PORT,'PORT is required!')
assert(HOST,'HOST is required!')

//exportando o modulo
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: firebaseConfig = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROTECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
      }
}