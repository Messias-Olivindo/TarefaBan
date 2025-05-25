//Pegar a pool de conexões
const { pool } = require('../../config/database');

//Criar objeto de criar a tabela para ser exportado
const CategoriaTabela = {
    async criarTabela() {
        try {
            await pool.query(`
                CREATE TABLE IF NOT EXISTS categoria(
                    id SERIAL PRIMARY KEY,
                    titulo VARCHAR(60) NOT NULL
                );  
                `);
                console.log('Tabela de categoria criada.')
        } catch (error) {
            console.error('Erro ao criar a tabela categoria: ', error);
        }
    }
}

module.exports = CategoriaTabela;