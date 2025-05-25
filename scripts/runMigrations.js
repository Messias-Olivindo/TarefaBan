const CreateUsuario = require('../scripts/migrations/20250525_createUsuario');
const CreateTarefas = require('../scripts/migrations/20250525_createTarefas');
const CreateCategoria = require('../scripts/migrations/20250525_createCategoria');
const CreateNotificacao = require('../scripts/migrations/20250525_createNotificacao');

CreateUsuario.criarTabela();
CreateTarefas.criarTabela();
CreateCategoria.criarTabela();
CreateNotificacao.criarTabela();