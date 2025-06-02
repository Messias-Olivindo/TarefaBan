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
    res.render(path.join(__dirname, '../views/layout/main'), {
        //Informações que serão passadas a esse arquivo e poderão ser acessadas depois com o <%>
        pageTiTle: 'Página inicial',
        content: path.join(__dirname, '../views/pages/home') 
    });
});

//exportar as rotas
module.exports = router;