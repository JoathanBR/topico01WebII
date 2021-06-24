const {Router} = require('express')

const FilmeController = require('../controllers/filme')

const router = Router()

router.get('/filme', FilmeController.pegaTodasAsImagens)
router.delete('/filme/:id', FilmeController.deletarFilme)
router.post('/filme', FilmeController.adicionarFilme)
router.patch('/filme/:id', FilmeController.atualizarFilme)

//router.get('/filme/:id', FilmeController.pegarFilme)


module.exports = router