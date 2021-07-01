const {Router} = require('express')
const middlewaresAutenticacao = require('../config/middlewares-autenticacao');

const OrganizacaoController = require('../controllers/organizacao')

const router = Router()

router.get('/organizacao', OrganizacaoController.pegaTodosOsFilmes)
router.delete('/organizacao/:id', middlewaresAutenticacao.bearer, OrganizacaoController.deletarFilme)
router.post('/organizacao', middlewaresAutenticacao.bearer, OrganizacaoController.adicionarFilme)
router.patch('/organizacao/:id', middlewaresAutenticacao.bearer, OrganizacaoController.atualizarFilme)

router.get('/organizacao/:id', OrganizacaoController.listarTodasInformacoes)

module.exports = router