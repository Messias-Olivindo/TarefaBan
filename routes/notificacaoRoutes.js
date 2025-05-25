//pegar o express
const express = require('express');
//pegar o router do express
const router = express.Router();
//pegar o controller
const NotificacaoController = require('../controllers/notificacaoController');

//Definir as rotas
router.post('', NotificacaoController.createNotificacao);
router.get('', NotificacaoController.getAllNotificacao);
router.get('/:id', NotificacaoController.getNotificacaoById);
router.delete('/:id',NotificacaoController.deleteNotificacao);

module.exports = router;