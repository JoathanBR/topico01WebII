class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarListaFilmes()
    }

    criarListaFilmes() {
        const sql = 'CREATE TABLE IF NOT EXISTS Filmes (id int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, genero varchar(20), duracao int NOT NULL, dataLancamento datetime NOT NULL, avaliacao varchar(20) NOT NULL, descricao text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Filmes criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas