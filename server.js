const express = require('express'); //chama o middleware, responsável por facilitar a transferência de informação entre aplicações e serviços
const bodyParser = require('body-parser'); //chama o body-parser, um middleware responsável por permitir a análise do corpo das requisições HTTP
const cors = require('cors'); // um mecanismo do node.js que permite definir o que os outros websites são permitidos a acessar em relação a recursos. Garante a segurança e previne acessos não autorizados diferentes origens
const {pool} = require('./config/database'); //Chamar a conexão com o banco de dados
const path = require('path');

const FrontRoutes = require('./routes/frontRoutes'); //importa as rotas de views
const UsuarioRoutes = require('./routes/usuarioRoutes'); //importa as rotas criadas para os usuarios
const TarefaRoutes = require('./routes/tarefaRoutes'); //importa as rotas criadas para as tarefas
const NotificacaoRoutes = require('./routes/notificacaoRoutes'); //importa as rotas criadas para as notificações
const CategoriaRoutes = require('./routes/categoriaRoutes');

const app = express(); //inicializa a instanciação de uma aplicação express
const port = 3000; //Guarda a porta que o site será rodado

//Usar os middlewares -> Acessam o request object e o response object 
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//habilitar o ejs
app.set('view engine', 'ejs');
//usar os arquivos estáticos do public
app.use(express.static(path.join(__dirname, 'public')));

//Começar a aplicação somente quando for conectado com o banco de dados
pool.connect()
//usar .then e .catch para lidar com o sucesso ou falha com a conexão com o banco de dados
  .then(() => {
    //informar que ocorreu a conexão com o banco de dados
    console.log("Conexão com o banco de dados realizada com sucesso");

    //Usar a rota de views
    app.use('/', FrontRoutes);

    //Usar as rotas de API definidas 
    //método use serve para montar funções middleware
    app.use('/api/usuario', UsuarioRoutes); //acessa o endpoint da api e realizas os métodos de api definido no módulo exportado
    app.use('/api/tarefa', TarefaRoutes);
    app.use('/api/notificacao', NotificacaoRoutes);
    app.use('/api/categoria', CategoriaRoutes);
    
    //Começar a aplicação
    //método listen é para iniciar um server e faz iniciar as conexões de entrada em uma porta específica. .listen(porta, nome do host, fila de conexões pendentes, função callback para realizar algo)
    app.listen(port, () => {
      console.log(`Server rodando na porta ${port}, acesse no link: http://localhost:3000`);
    })

  })

  //caso der errado
  .catch((err) => {
    console.log("Erro ao se conectar com o banco de dados: ", err);
  });
