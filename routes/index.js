const express = require('express')
const filme = require('./filmeRoute')
const organizacao = require('./organizacaoRoute')

module.exports = app =>{
    app.use(express.json())
    app.use(filme)
    app.use(organizacao)
}