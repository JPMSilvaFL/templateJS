const Contato = require('../models/ContatoModel');

exports.paginaInicial = (req, res) => {
    res.render('cadastroContato');
};

exports.criarContato = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(function () {
                return res.redirect('/cadastroContato/index');
            });
        }
        req.flash("success", "Cadastro criado com sucesso.");            
        req.session.save(() => res.redirect('/'));
        return;
        
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}