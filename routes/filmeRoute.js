const {Router} = require('express')

const FilmeController = require('../controllers/filme')

const router = Router()

router.get('/filme', FilmeController.pegaTodasAsImagens)
router.delete('/filme/:id', FilmeController.deletarFilme)

module.exports = router