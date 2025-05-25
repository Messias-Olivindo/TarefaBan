//pegar o pool de conexões
const { pool } = require('../../config/database');

//Objeto com o comando sql para gerar a tabela
const UsuarioTabela = {
    async criarTabela() {
        try {
            await pool.query(`
            CREATE TABLE IF NOT EXISTS usuario(
                id SERIAL PRIMARY KEY,
                nome VARCHAR(80) NOT NULL,
                email VARCHAR(80) NOT NULL,
                senha VARCHAR(20) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
            );
        `);
            console.log('Tabela de usuários criada');
        } catch (error) {
            console.error('Erro ao criar a tabela de usuários:', error);
        }
    }
}
//exportar a criação da tabela
module.exports = UsuarioTabela;