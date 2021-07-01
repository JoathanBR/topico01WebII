const {Router} = require('express')
const AdministradorController = require('../controllers/administrador')
const passport = require('passport');
const middlewaresAutenticacao = require('../config/middlewares-autenticacao');

const router = Router()

router.get('/administrador', AdministradorController.pegaTodasAdministradores)

router.delete('/administrador/:id', middlewaresAutenticacao.bearer, AdministradorController.deletaradministrador)

router.post('/administrador', AdministradorController.adicionaradministrador)

router.patch('/administrador/:id', middlewaresAutenticacao.bearer, AdministradorController.atualizaradministrador)

router.post('/administrador/login', middlewaresAutenticacao.local ,AdministradorController.login)

module.exports = router