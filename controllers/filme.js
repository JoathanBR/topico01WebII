const database = require('../repositorios/models')

class FilmeController {
    static async pegaTodasAsImagens(req, res){
        try{
            const todasAsImagens = await database.InfoExtra.findAll()
            console.log(todasAsImagens)
            return res.status(200).json(todasAsImagens)
        } catch{
            const todasAsImagens = await database.InfoExtra.findAll()
            return res.status(500).json(todasAsImagens)
        }
    }

    static async deletarFilme(req, res){
        try{
            const id = parseInt(req.params.id)
            const deletar = await database.InfoExtra.findByPk(id)
            deletar.destroy()

            return res.status(200).json(deletar.destroy())
        } catch{
            const id = parseInt(req.params.id)
            const deletar = await database.InfoExtra.findByPk(id)
            deletar.destroy()

            return res.status(500).json(deletar.destroy())
        }
    }

    static async adicionarFilme(req, res){
        try{
            const filme = req.body

            database.InfoExtra.create(filme)

            return res.status(200).json(filme)

        } catch{

            return res.status(500).json('Deu ruim')

        }
    }

    static async atualizarFilme(req, res){
        try{
    
            const id = parseInt(req.params.id)
            const filme = await database.InfoExtra.findByPk(id)

            const valores = [
                filme.imagem = req.body.imagem,
                filme.filme_id = req.body.filme_id, 
                filme.createdAt = new Date, 
                filme.updateAt = new Date
            ]

            filme.save()

            return res.status(200).json(filme)

        } catch{
                    
            return res.status(500).json('Deu ruim')
        }
    }
}

module.exports = FilmeController
