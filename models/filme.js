const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../infraestrutura/uploadDeArquivos/uploadDeArquivos')

class Filme {
    adiciona(filme, res){
        const query = 'INSERT INTO FilmeExtra SET ?'

        
        uploadDeArquivo(filme.imagem, filme.titulo, (erro, novoCaminho) => {
            if(erro){
                res.status(400).json({erro})
            } else {
                const novoFilme = {titulo: filme.titulo, imagem:novoCaminho, diretor: filme.diretor }
                conexao.query(query, novoFilme, erro =>{
                    if(erro){
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoFilme)
                    }
                })
            }
        })
    }
}
module.exports = new Filme()