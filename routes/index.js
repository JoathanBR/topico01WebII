const express = require('express')
const filme = require('./filmeRoute')
const organizacao = require('./organizacaoRoute')
const administrador = require('./administradorRoute')

module.exports = app =>{
    app.use(express.json())
    app.use(filme)
    app.use(organizacao)
    app.use(administrador)
}