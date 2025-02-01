const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    numero: { type: String, required: true },
    data: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register() {
        this.valida();

        if (this.errors.length > 0) return;

        this.body = await ContatoModel.create(this.body);

    }

    valida() {
        this.cleanUp();
        if (this.body.nome === '') this.errors.push('Nome é um campo obrigatório.');
        if (this.body.numero === '' || this.body.numero.length < 11) this.errors.push('Numero invalido.');
        
    }


    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            numero: this.body.numero
        };


    }
}

module.exports = Contato;
