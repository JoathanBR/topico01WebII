const {Router} = require('express')

const AdministradorController = require('../controllers/administrador')

const router = Router()

router.get('/administrador', AdministradorController.pegaTodasAdministradores)
router.delete('/administrador/:id', AdministradorController.deletaradministrador)
router.post('/administrador', AdministradorController.adicionaradministrador)
router.patch('/administrador/:id', AdministradorController.atualizaradministrador)


module.exports = router