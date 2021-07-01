const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy

const Admin = require('../controllers/administrador')
const { InvalidArgumentError } = require('./erros.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function verificaAdmin(admin) {
    if(!admin) {
        throw new InvalidArgumentError('Não existe usuário com esse e-mail')
    }
}

async function verificaSenha(senha, senhaHash) {
    const senhaValida = await bcrypt.compare(senha, senhaHash)
    if(!senhaValida) {
        throw new InvalidArgumentError('E-mail ou senha inválidos')
    }
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) => {
        try {
            const admin = await Admin.buscarPorEmail(email)
            verificaAdmin(admin)
            await verificaSenha(senha, admin.senha)
            done(null, admin)
        } catch (error) {
            done(error)
        }
    })
);

passport.use(
    new BearerStrategy(
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.CHAVE_JWT)
                const admin = await Admin.buscaPorId(payload.id)
                done(null, admin)
            } catch (error) {
                done(error)
            }
        }
    )
);