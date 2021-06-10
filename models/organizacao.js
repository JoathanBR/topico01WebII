const moment = require('moment')
const conexao = require('../infraestrutura/conexao')


class Organizacao {
    adiciona(organizacao, res) {
        const dataLancamento = moment(organizacao.dataLancamento, 'DD/MM/YYYY').format('YYYY-MM-DD')
        var valorStatus = 'vazio'

        var filmeAtivo = function(valor){
            const dataAtual = moment().format('YYYY-MM-DD')
            const dataLancamentoFormato = moment(organizacao.dataLancamento, 'DD/MM/YYYY').format('YYYY-MM-DD')

            const dataDisponivel = moment(dataLancamentoFormato).isSameOrAfter(dataAtual)
            
            if(dataDisponivel){
                return valor = 'Aguardando lançamento'

            }else{
                return valor = 'Disponível'
            }
        }

        var status = filmeAtivo(valorStatus)

        const sql = 'INSERT INTO Filmes SET ?'

        const organizacaoData = {...organizacao, dataLancamento, status}

        conexao.query(sql, organizacaoData, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(organizacao)
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