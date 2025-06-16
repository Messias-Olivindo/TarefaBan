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

//página do quadro kanban
router.get('/quadro', (req, res) =>{

    res.render(path.join(__dirname, '../views/layout/main'), {
        pageTitle: 'Quadro',
        content: path.join(__dirname, '../views/pages/quadro'),
    });
});

//página de adicionar uma tarefa
router.get('/adicionar', (req, res) => {
    res.render(path.join(__dirname, '../views/layout/main'),{
        pageTitle: 'Adicionar',
        content: path.join(__dirname, '../views/pages/addTarefa'),
    });
});

router.get('/editar/:id', async (req, res) => {
    const id = req.params.id;
    // Busca a tarefa pelo ID, por exemplo na API ou banco
    const response = await fetch(`http://localhost:3000/api/tarefa/${id}`);
    const tarefaArray = await response.json();
     const tarefa = tarefaArray[0];

    // Renderiza a view de edição, passando a tarefa para preencher os inputs
    res.render(path.join(__dirname, '../views/layout/main'),{
        pageTitle: 'Editar',
        content: path.join(__dirname, '../views/pages/editTarefa'),
        tarefa
    });
});

//exportar as rotas
module.exports = router;