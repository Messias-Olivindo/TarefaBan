//Pegar a pool de conexões
const { pool } = require('../config/database');

//Criar o objeto para exportar o model da categoria
const CategoriaModel = {
    //criar uma categoria
    async createCategoria(titulo) {
        const resultado = await pool.query(`
            INSERT INTO categoria(titulo)
            VALUES($1);
            `, [titulo]);
        return resultado.rows;
    },

    //ver as categorias
    async getAllCategoria() {
        const resultado = await pool.query(`
            SELECT * FROM categoria;
            `);
        return resultado.rows;
    },

    //ver uma categoria
    async getCategoriaById(id){
        const resultado = await pool.query(`
            SELECT * FROM categoria WHERE id = $1;   
            `, [id]);
        return resultado.rows;
    },

    //deletar uma categoria
    async deleteCategoria(id){
        const resultado = await pool.query(`
            DELETE FROM categoria WHERE id = $1;
            `,[id]);
        return resultado.rows;
    }
}
//exportar o model
module.exports = CategoriaModel;
