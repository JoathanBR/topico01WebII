const passport = require('passport');

module.exports = {
    local: (req, res, next) => {
        passport.authenticate('local',
            {session: false},
            (erro, admin, info) => {
                if (erro && erro.name === 'InvalidArgumentError') {
                    return res.status(401).json({erro: erro.message});
                }

                if(erro) {
                    return res.status(500).json({erro: erro.message});
                }

                if(!admin) {
                    return res.status(401).json();
                }

                req.user = admin;
                return next();
            }
        )(req, res, next)
    },
    bearer: (req, res, next) => {
        passport.authenticate(
            'bearer',
            {session: false},
            (erro, admin, info) => {
                if(erro && erro.name === 'JsonWebTokenError') {
                    return res.status(401).json({erro: erro.message});
                }
                if(erro) {
                    return res.status(500).json({erro: erro.message});
                }
                if(!admin) {
                    return res.status(401).json();
                }

                req.user = admin;
                return next();
            }
        )(req, res, next)
    }
}