const database = require('../repositorios/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

function criaTokenJWT(admin) {
    const payload = {
        id: admin.id
    }

    const token = jwt.sign(payload, process.env.CHAVE_JWT)
    return token
}

class AdministradorController {
    static async pegaTodasAdministradores(req, res){
        try{
            const todasAdmins = await database.Administrador.findAll()
            return res.status(200).json(todasAdmins)
        } catch(error){

            return res.status(500).json(error.message)
        }
    }

    static async deletaradministrador(req, res){
        try{
            const id = parseInt(req.params.id)
            const deletar = await database.Administrador.findByPk(id)
            deletar.destroy()

            return res.status(200).json(deletar.destroy())
        } catch(error){

            return res.status(500).json(error.message)

        }
    }

    static async adicionaradministrador(req, res){
        try{
            const admin = req.body
            const custoHash = 12
            const senhaAdmin = req.body.senha
            
            const senhaHash = await bcrypt.hash(senhaAdmin, custoHash)  

            admin.senha = senhaHash

            database.Administrador.create(admin)

            return res.status(200).json(admin)

        } catch(error){

            return res.status(500).json(error.message)

        }
    }

    static async gerarSenhaHash(senha){
        const custoHash = 12
        console.log('chegou aqui')
        return bcrypt.hash(senha,custoHash)
    }

    static async atualizaradministrador(req, res){
        try{
    
            const id = parseInt(req.params.id)
            const admin = await database.Administrador.findByPk(id)

            const valores = [
                admin.user = req.body.user,
                admin.email = req.body.email, 
                admin.senha = req.body.senha, 
                admin.createdAt = new Date, 
                admin.updateAt = new Date
            ]

            admin.save()

            return res.status(200).json(admin)

        } catch(error){
                    
            return res.status(500).json(error.message)
        }
    }

    static async buscarPorEmail(email) {
        const admin = await database.Administrador.findOne({where: { email: email } })
        return admin
    }

    static async buscaPorId(id) {
        const admin = await database.Administrador.findByPk(id);
        return admin;
    }

    static login(req, res) {
        const token = criaTokenJWT(req.user)
        console.log(token)
        res.set('Authorization', token)
        res.status(204).send()
    }
}

module.exports = AdministradorController
