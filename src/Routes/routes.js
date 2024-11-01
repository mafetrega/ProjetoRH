const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const FuncionarioController = require('../controllers/FuncionarioController');

// Rotas para horas extras
router.post('/horasExtras', FuncionarioController.adicionarHorasExtras);
router.get('/horasExtras/:funcionarioId', FuncionarioController.listarHorasExtras);

// Rotas para banco de horas
router.post('/bancoHoras', FuncionarioController.adicionarBancoHoras);
router.get('/bancoHoras/:funcionarioId', FuncionarioController.listarBancoHoras);

// Rotas para férias
router.post('/ferias', FuncionarioController.adicionarFerias);
router.get('/ferias/:funcionarioId', FuncionarioController.listarFerias);

module.exports = router;