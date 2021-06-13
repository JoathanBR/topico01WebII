const {Router} = require('express')

const OrganizacaoController = require('../controllers/organizacao')

const router = Router()

router.get('/organizacao', OrganizacaoController.pegaTodosOsFilmes)

module.exports = router