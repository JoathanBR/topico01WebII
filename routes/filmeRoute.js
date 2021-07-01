const {Router} = require('express')
const middlewaresAutenticacao = require('../config/middlewares-autenticacao');

const FilmeController = require('../controllers/filme')

const router = Router()

router.get('/filme', FilmeController.pegaTodasAsImagens)
router.delete('/filme/:id', middlewaresAutenticacao.bearer, FilmeController.deletarFilme)
router.post('/filme', middlewaresAutenticacao.bearer, FilmeController.adicionarFilme)
router.patch('/filme/:id', middlewaresAutenticacao.bearer, FilmeController.atualizarFilme)


module.exports = router