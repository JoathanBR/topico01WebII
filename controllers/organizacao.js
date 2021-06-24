const database = require('../repositorios/models')
const infoExtra = require('./filme')

class OrganizacaoController {
    static async pegaTodosOsFilmes(req, res){
        try{

            const todosOsFilmes = await database.Organizacao.findAll()

            return res.status(200).json(todosOsFilmes)

        } catch(error){
        
            return res.status(500).json(error.message)
        }
    }

    static async deletarFilme(req, res){
        try{
            const id = parseInt(req.params.id)
            const deletar = await database.Organizacao.findByPk(id)
            deletar.destroy()

            return res.status(200).json(deletar.destroy())
        } catch(error){
        
            return res.status(500).json(error.message)
        }
    }
    
    static async adicionarFilme(req, res){
        try{
            const organizacao = req.body

            database.Organizacao.create(organizacao)

            return res.status(200).json(organizacao)

        } catch(error){
        
            return res.status(500).json(error.message)
        }
    }

    static async atualizarFilme(req, res){
        try{
    
            const id = parseInt(req.params.id)
            const filme = await database.Organizacao.findByPk(id)

            const valores = [
                filme.titulo = req.body.titulo,
                filme.genero = req.body.genero, 
                filme.duracao = req.body.duracao, 
                filme.dataLancamento = req.body.dataLancamento, 
                filme.avaliacao = req.body.avaliacao, 
                filme.descricao = req.body.descricao, filme.status = req.body.status, 
                filme.createdAt = new Date, 
                filme.updateAt = new Date
            ]

            filme.save()

            return res.status(200).json(filme)

        } catch(error){
        
            return res.status(500).json(error.message)
        }
    }

    static async listarTodasInformacoes(req, res){
        try{
            const idCatalago = parseInt(req.params.id)
            const catalogo = await database.Organizacao.findByPk(idCatalago)
            const infoExtra = await database.InfoExtra.findAll({
                where:{
                    filme_id: idCatalago
                }
            })

            const todos = [catalogo, infoExtra]

            console.log(todos)
            return res.status(200).json(todos)
        } catch(error){
        
            return res.status(500).json(error.message)
        }
    }
}

module.exports = OrganizacaoController