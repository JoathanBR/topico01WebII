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
        
        Organizacao.adiciona(organizacao).then(organizacaoCadastrada =>
            res.status(201).json(organizacaoCadastrada))
            .catch(erros => res.status(400).json(erros))
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