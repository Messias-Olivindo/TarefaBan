//Pegar o Model
const TarefaModel = require('../models/tarefa');

//Objeto do controller de tarefas para ser exportado depois
const TarefaController = {
    //Controller do criar tarefas
    async createTarefa(req, res) {
        try {
            //pegar as informações da requisição
            const { titulo, descricao, estado, importancia, prazo } = req.body
            //mandar as novas informações para criar a nova tarefa
            const novaTarefa = await TarefaModel.createTarefa(titulo, descricao, estado, importancia, prazo);
            //mostrar a nova tarefa
            res.status(201).json(novaTarefa);

        } catch (error) {
            res.status(500).json({
                error: error.message
            })

        }
    },

    //Pegar todas as tarefas
    async getAllTarefa (req,res) {
        //analisar se deu certo
        try{
            //constante para guardar o pedido do banco de dados
            const tarefas = await TarefaModel.getAllTarefa();
            return res.status(200).json(tarefas);

        } catch(error) {
            res.status(500).json({
                error: error.message
            });

        }
    },

    //Controller para o pegar a tarefa pelo id
    async getTarefaById(req, res){
        try{
            //guardar o resultado do banco de dados
            const tarefa = await TarefaModel.getTarefaById(req.params.id);

            //verificar se o id coincidiu com alguma tarefa
            if(tarefa){
                res.status(200).json(tarefa);

            }
            else{
                res.status(404).json({
                    error: 'Tarefa não encontrada'
                });

            }

        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    //Controller do atualizar tarefas
    async updateTarefa (req, res) {
        //analisar se deu certo
        try{
            //constante para guara=dar as informações que vão ser mandadas para o banco de dados
            const { titulo, descricao, estado, importancia, prazo} = req.body;
            //constante para levar as informações para o models e guardar o resultado
            const id = req.params.id;
            const tarefaAtualizada = await TarefaModel.updateTarefa(id, titulo, descricao, estado, importancia, prazo);
            res.status(200).json(tarefaAtualizada);

        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    //Controller de deletar uma tarefa
    async deleteTarefa (req, res){
        // analisar de deu certo
        try{
            //Mandar a informação para o models e guardar o resultado
            const tarefaDeletada = await TarefaModel.deleteTarefa(req.params.id);
            //verificar se a tarefa existe
            if(tarefaDeletada) {
                res.status(200).json(tarefaDeletada);
            }
            else{
                res.status(404).json({
                    error: 'Tarefa não encontrada'
                })
            }

        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }
}

//Exportar o controller
module.exports = TarefaController;