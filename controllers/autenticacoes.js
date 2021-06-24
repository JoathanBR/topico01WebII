const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
//const BearerStrategy = require('passport-http-bearer').Strategy

const Admin = require('./administrador')
const {InvalidArgumentError} = require('./erros')
const bcrypt = require('bcrypt')
//const jwt = require('jsonwebtoken')

function verificarAdmin(admin){
    if(!admin){
        throw new InvalidArgumentError('Não existe um Administrador com esse e-mail')
    }
}

async function verificaSenha(senha, senhaHash){
    const senhaValida = await bcrypt.compare(senha, senhaHash)
    if(!senhaValida){
        throw new InvalidArgumentError('E-mail ou senha inválidos')
    }
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) =>{
        try {
            const admin = await Admin.buscaPorEmail(email) 
            verificarAdmin(admin)
            await verificaSenha(senha, admin.senhaHash)
            done(null, admin)
        } catch (erro) {
            done(erro)            
        }
    })
)

/*
passport.use(
    new BearerStrategy(
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.CHAVE_JWT)
                const admin = await Admin.buscaPorId(payload.id)
                done(null, admin)
            } catch (erro) {
                done(erro)
            }
        }
    )
)
*/