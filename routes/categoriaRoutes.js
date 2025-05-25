//pegar o express
const express = require('express');
//pegar o router
const router = express.Router();
//pegar o controller
const CategoriaController = require('../controllers/categoriaController');

//definir as rotas
router.post('', CategoriaController.createCategoria);
router.get('', CategoriaController.getAllCategoria);
router.get('/:id', CategoriaController.getCategoriaById);
router.delete('/:id', CategoriaController.deleteCategoria);

module.exports = router;