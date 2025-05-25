const express = require('express'); //importar o módulo do express
const router = express.Router(); //importar função do Express para contribuir com a modularização do projeto. Cria mini aplicações de rotas
const UsuarioController = require('../controllers/userController'); // importar o controller

//Criar as rotas de acordo com o metódos de API
router.get('', UsuarioController.getAllUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);
router.post('', UsuarioController.createUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);
router.put('/:id', UsuarioController.updateUsuario);

module.exports = router;