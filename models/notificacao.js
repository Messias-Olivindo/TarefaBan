//pegar a pool de conexões
const { pool } = require('../config/database');

//Criar um objeto com o models para ser exportado depois
const NotificacaoModel = {
    //criar uma notificação
    async createNotificacao(titulo, descricao, id_tarefa) {
        const resultado = await pool.query(`
            INSERT INTO notificacao(titulo, descricao, id_tarefa)
            VALUES($1, $2, $3); 
            `, [titulo, descricao, id_tarefa]);
        return resultado.rows
    },

    //Pegar todas as notificações
    async getAllNotificacao() {
        const resultado = await pool.query(`
                SELECT * FROM notificacao;
            `);
        return resultado.rows;
    },

    //Pegar uma notificação em específico
    async getNotificacaoById(id) {
        const resultado = await pool.query(`
                SELECT * FROM notificacao WHERE id = $1;
            `, [id]);
            return resultado.rows;
    },

    //deletar uma notificação
    async deleteNotificacao(id) {
        const resultado = await pool.query(`
            DELETE FROM notificacao WHERE id = $1;
            `, [id]);
        return resultado.rows;
    }
}
//Exportar o model da notificação
module.exports = NotificacaoModel;