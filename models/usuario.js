const { pool } = require('../config/database');

//Pega e cria as informações do banco de dados

//Fazer a variável como uma const para facilitar a modularização do código
const UsuarioModel = {
    //Consultar todos os usuários (padrão) -> pode ser meio inútil
    async getAllUsuarios (){
        const resultado = await pool.query('SELECT * FROM usuario');
        return resultado.rows
    },

    //Consultar apenas um usuário pelo id
    async getUsuarioById (id) {
        const resultado = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
        return resultado.rows;
    },

    //Criar usuário
    async createUsuario (nome, email, senha){
        const resultado = await pool.query('INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3)', [nome, email, senha]);
        return resultado.rows;
    },

    async deleteUsuario (id){
        const resultado = await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
        return resultado.rows;
    },

    async updateUsuario (id, nome, email, senha) {
        const resultado = await pool.query(
            `
                UPDATE usuario
                SET nome = $1, email = $2, senha = $3, updated_at = CURRENT_TIMESTAMP
                WHERE id = $4
            `
        , [nome, email, senha, id]);
        return resultado.rows;
    }

};

//module.exports exporta somente objeto
module.exports = UsuarioModel;