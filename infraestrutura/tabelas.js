class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarListaFilmes()
        this.criarFilmeExtra()
    }

    criarListaFilmes() {
        const sql = 'CREATE TABLE IF NOT EXISTS Filmes (id int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, genero varchar(20), duracao int NOT NULL, dataLancamento date NOT NULL, avaliacao varchar(20) NOT NULL, descricao text, status varchar(30) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Filmes criada com sucesso')
            }
        })
    }

    criarFilmeExtra() {
        const sql = 'CREATE TABLE IF NOT EXISTS FilmeExtra (id int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, imagem varchar(200), diretor varchar(50), PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela FilmeExtra criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas