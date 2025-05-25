const express = require('express'); //chama o middleware, responsável por facilitar a transferência de informação entre aplicações e serviços
const bodyParser = require('body-parser'); //chama o body-parser, um middleware responsável por permitir a análise do corpo das requisições HTTP
const cors = require('cors'); // um mecanismo do node.js que permite definir o que os outros websites são permitidos a acessar em relação a recursos. Garante a segurança e previne acessos não autorizados diferentes origens
const UsuarioRoutes = require('./routes/usuarioRoutes'); //importa as rotas criadas para os usuarios
const TarefaRoutes = require('./routes/tarefaRoutes'); //importa as rotas criadas para as tarefas
const NotificacaoRoutes = require('./routes/notificacaoRoutes');

const app = express(); //inicializa a instanciação de uma aplicação express
const port = 3000; //Guarda a porta que o site será rodado

//Usar os middlewares -> Acessam o request object e o response object 
app.use(cors());
app.use(bodyParser.json());

//Usar as rotas definidas
//método use serve para montar funções middleware
app.use('/usuario', UsuarioRoutes); //acessa o endpoint da api e realizas os métodos de api definido no módulo exportado
app.use('/tarefa', TarefaRoutes);
app.use('/notificacao', NotificacaoRoutes);

//Começar a aplicação
//método listen é para iniciar um server e faz iniciar as conexões de entrada em uma porta específica. .listen(porta, nome do host, fila de conexões pendentes, função callback para realizar algo)
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}, acesse no link: http://localhost:3000`);
})