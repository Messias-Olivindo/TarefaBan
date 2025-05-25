//Pegar a pool de conexões
const { pool } = require('../../config/database');

//Criar objeto de criar a tabela para ser exportado
const NotificacaoTabela = {
    async criarTabela() {
        try{
            await pool.query(`
                CREATE TABLE IF NOT EXISTS notificacao (
                    id SERIAL PRIMARY KEY,
                    titulo VARCHAR(60),
                    descricao TEXT,
                    id_tarefa INTEGER REFERENCES tarefas(id) ON DELETE CASCADE,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `);
            console.log('Tabela de notificação criada.');

        } catch (error) {
            console.error('Erro ao criar a tabela de notificação', error)
        }
    }
}

//exportar a criação da tabela
module.exports = NotificacaoTabela;