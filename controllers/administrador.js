const database = require('../repositorios/models')
const bcrypt = require('bcrypt')

class AdministradorController {
    static async pegaTodasAdministradores(req, res){
        try{
            const todasAdmins = await database.Administrador.findAll()
            return res.status(200).json(todasAdmins)
        } catch{

            return res.status(500).json('Deu ruim')

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

    static async login(req, res){
        res.status(204).send()
      }

}

module.exports = AdministradorController
