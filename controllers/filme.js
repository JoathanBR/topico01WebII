const Filme = require('../models/filme')

module.exports = app => {
    app.post('/filme', (req, res) =>{
        const filme = req.body
        
        Filme.adiciona(filme, res)
    })
}