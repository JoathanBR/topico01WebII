require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const estrategiasAutenticacao = require('./config/estrategias-autenticacao');
const middlewaresAutenticacao = require('./config/middlewares-autenticacao');

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set('view engine', 'ejs');

routes(app)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

module.exports = app