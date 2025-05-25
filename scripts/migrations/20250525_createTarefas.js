//Pegar a pool de conexões
const { pool } = require('../../config/database');

//Criar objeto para exportar a criação da tabela de tarefas
const TarefaTabela = {
    async criarTabela() {
        try {
            await pool.query(`
                    CREATE TABLE IF NOT EXISTS tarefas (
                        id SERIAL PRIMARY KEY,
                        titulo VARCHAR(60) NOT NULL,
                        descricao TEXT,
                        estado VARCHAR(12) NOT NULL,
                        importancia VARCHAR(9) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        prazo DATE
                    );
                `);
                console.log('Tabela de tarefas criada.')
        } catch (error) {
            console.error('Erro ao criar a tabela de tarefas: ', error);
        }
    }
}
//exportar a criação da tabela
module.exports = TarefaTabela;