const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/404', erroController.paginaInicial);

route.get('/login/index', loginController.paginaInicial);
route.post('/login/login', loginController.realizaLogin);

route.get('/register/index', registerControler.paginaInicial);
route.post('/register/register', registerControler.criarConta);

route.get('/cadastroContato', cadastroContatoController.paginaInicial);


module.exports = route;
