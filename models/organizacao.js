const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Organizacao {
    adiciona(organizacao, res) {
        const dataLancamento = moment(organizacao.dataLancamento, 'DD/MM/YYYY').format('YYYY-MM-DD')


            const organizacaoData = {...organizacao, dataLancamento}

            console.log(organizacao.dataLancamento)
            const sql = 'INSERT INTO Filmes SET ?'
    
            conexao.query(sql, organizacaoData, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(organizacao)
                }
            })

       
    }

    lista(res) {
        const sql = 'SELECT * FROM Filmes'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Filmes WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const organizacao = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(organizacao)
            }
        })
    }

    altera(id, valores, res) {
        if(valores.dataLancamento) {
            valores.dataLancamento = moment(valores.dataLancamento, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }      
        const sql = 'UPDATE Filmes SET ? WHERE id=?'

        console.log(valores)
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Filmes WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Organizacao