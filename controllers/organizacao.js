/*
const Organizacao = require('../models/organizacao') 

module.exports = app => {
    app.get('/organizacao', (req, res) => {
        Organizacao.lista(res)
    })

    app.get('/organizacao/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Organizacao.buscaPorId(id, res)
    })

    app.post('/organizacao', (req, res) => {
        const organizacao = req.body
        
        Organizacao.adiciona(organizacao, res)
    }) 

    app.patch('/organizacao/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Organizacao.altera(id, valores, res)
    })

    app.delete('/organizacao/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Organizacao.deleta(id, res)
    })
}
*/

const database = require('../repositorios/models')

class OrganizacaoController {
    static async pegaTodosOsFilmes(req, res){
        try{
            const todosOsFilmes = await database.Organizacao.findAll()
            return res.status(200).json(todosOsFilmes)
        } catch{
            const todosOsFilmes = await database.Organizacao.findAll()
            return res.status(500).json(todosOsFilmes)
        }
    }

    static async deletarFilme(req, res){
        try{
            const id = parseInt(req.params.id)
            const deletar = await database.Organizacao.findByPk(id)
            deletar.destroy()

            return res.status(200).json(deletar.destroy())
        } catch{
            const id = parseInt(req.params.id)
            const deletar = await database.Organizacao.findByPk(id)
            deletar.destroy()
            
            return res.status(500).json(deletar.destroy())
        }
    }
}

module.exports = OrganizacaoController