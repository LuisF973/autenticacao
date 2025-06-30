const express = require('express');
const AlunoController = require('../controllers/aluno.controller');
const router = express.Router()
const AutenticacaoMiddleware = require('../middleware/aluno.middleware');



// rota publica de cadastro
router.post('/cadastrar', AlunoController.cadastrar);

//rota de perfil
router.get('/perfil', AutenticacaoMiddleware.autenticarToken, AlunoController.perfil);

module.exports = router;