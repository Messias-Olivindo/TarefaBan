//Pegar o express
const express = require('express');
//Pegar o controlador de rotas do express
const router = express.Router();
//Pegar o controller
const TarefaController = require('../controllers/tarefaController');

//definir as rotas
router.post('/', TarefaController.createTarefa);
router.get('', TarefaController.getAllTarefa);
router.get('/:id', TarefaController.getTarefaById);
router.put('/:id', TarefaController.updateTarefa);
router.delete('/:id', TarefaController.deleteTarefa);

//exportar as rotas da tarefa
module.exports = router;