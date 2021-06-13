const {Router} = require('express')

const FilmeController = require('../controllers/filme')

const router = Router()

router.get('/filme', FilmeController.pegaTodasAsImagens)

module.exports = router