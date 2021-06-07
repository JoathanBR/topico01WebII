const query = require('../infraestrutura/queries')

class Organizacao {
    adiciona(organizacao) {
        const sql = 'INSERT INTO Filmes SET ?'
        return query(sql, organizacao)
    }

    listar(organizacao) {
        const sql = 'SELECT * FROM Filmes'
        return query(sql, organizacao)
    }
}

module.exports = new Organizacao()