//pegar o express
const express = require('express');
//Usar o router
const router = express.Router();
//importar o path 
const path = require('path');

//Página inicial
router.get('/', (req, res) => {
    //renderizar a página
    //path join para criar um caminha absoluto para acessar o arquivo
    //poderia ser feito sem o path já que o render já procura a pasta views do projeto
    res.render(path.join(__dirname,'../views/layout/main'), {
        //Informações que serão passadas a esse arquivo e poderão ser acessadas depois com o <%>
        pageTitle: 'Página inicial',
        content: path.join(__dirname, '../views/pages/home') 
    });
});

//página de perfil
router.get('/usuario', (req, res) => {
    res.render(path.join(__dirname,'../views/layout/main'), {
        pageTitle: 'Página de usuários',
        content: path.join(__dirname, '../views/pages/teste')
    });
});

//exportar as rotas
module.exports = router;