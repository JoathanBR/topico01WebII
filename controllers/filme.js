/*
const Filme = require('../models/filme')

module.exports = app => {
    app.post('/filme', (req, res) =>{
        const filme = req.body
        
        Filme.adiciona(filme, res)
    })
    
}
*/

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
}

module.exports = FilmeController
