//fazer a comunicação com o models
const NotificacaoModel = require('../models/notificacao');

//Objeto do controller para ser exportado
const NotificacaoController = {
    //Controller de criar uma notificacao
    async createNotificacao(req, res) {
        try {
            //guardar as informações inputadas
            const { titulo, descricao, id_tarefa } = req.body;
            //Fazer a comunicação com o models
            const novaNotificacao = await NotificacaoModel.createNotificacao(titulo, descricao, id_tarefa);
            res.status(200).json(novaNotificacao);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    //Controller de receber todas as notificações
    async getAllNotificacao(req, res) {
        try {
            //Constante para fazer a comunicação com o model
            const notificacoes = await NotificacaoModel.getAllNotificacao();
            res.status(200).json(notificacoes);

        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    //Controller de pegar uma notificacao
    async getNotificacaoById(req,res){
        try{
            //constante para a comunicação com o model
            const notificacao = await NotificacaoModel.getNotificacaoById(req.params.id);
            //verificar se é uma notificação válida
            if(notificacao){
                res.status(200).json(notificacao);
            }
            else {
                res.status(404).json({
                    error: 'Notificação não encontrada'
                });
                
            }
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
    
    //Controller de deletar uma notificação
    async deleteNotificacao(req, res) {
        try{
            //constante para mandar a informação para o model
            const notificacaoDeletada = await NotificacaoModel.deleteNotificacao(req.params.id);
            //verificar se é uma notificacao registrada
            if(notificacaoDeletada){
                res.status(200).json(notificacaoDeletada);

            }
            else{
                res.status(404).json({
                    error: "Notificação não encontrada"
                });
            }
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }
}
//Exportar o controller da notificação
module.exports = NotificacaoController;