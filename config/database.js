require('dotenv').config(); // Carregando os dados colocados no .env para usá-los por meio do process.env

const { Pool } = require('pg'); // Chamando o Pool a partir do pg(driver para interagir com o banco de dados postgresql) baixado. Serve para a otimização do processo de conexão com o banco de dados, reutilizando informações e ativando outras quando necessário.

// Criar a pool de conexões
const pool = new Pool({
    //informações do banco de dados
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {pool}; //poder exportar a pool para arquivos em outros arquivos