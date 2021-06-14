const {Router} = require('express')

const OrganizacaoController = require('../controllers/organizacao')

const router = Router()

router.get('/organizacao', OrganizacaoController.pegaTodosOsFilmes)
router.delete('/organizacao/:id', OrganizacaoController.deletarFilme)
router.post('/organizacao', OrganizacaoController.adicionarFilme)
router.patch('/organizacao/:id', OrganizacaoController.atualizarFilme)


module.exports = router