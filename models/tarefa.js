//exportar a conexão com o banco de dados. Pool deve ser um objetco
const { pool } = require('../config/database');

//objeto para ser exportado com todas as interações com o banco de dados
const TarefaModel = {
    //Criar uma tarefa
    async createTarefa(titulo, descricao, estado, importancia, prazo){
        const resultado = await pool.query(
            `
                INSERT INTO tarefas (titulo, descricao, estado, importancia, prazo) 
                VALUES ($1, $2, $3, $4, $5)
            `
        , [titulo, descricao, estado, importancia, prazo]);
        return resultado.rows;
    },

    //Ver todas as tarefas
    async getAllTarefa() {
        const resultado = await pool.query('SELECT * FROM tarefas');
        return resultado.rows;
    },

    //Ver uma tarefa em específico
    async getTarefaById(id) {
        const resultado = await pool.query('SELECT * FROM tarefas WHERE id = $1', [id]);
        return resultado.rows;
    },

    //Atualizar uma tarefa
    async updateTarefa(id, titulo, descricao, estado, importancia, prazo) {
        const resultado = await pool.query(
            `
                UPDATE tarefas 
                SET titulo = $1,
                descricao = $2,
                estado = $3,
                importancia = $4,
                prazo = $5,
                updated_at = CURRENT_TIMESTAMP
                WHERE id = $6
            `
            , [titulo, descricao, estado, importancia, prazo, id]
        );
        return resultado.rows;
    },

    //Deletar uma tarefa
    async deleteTarefa(id){
        const resultado = await pool.query(
            `
                DELETE FROM tarefas
                WHERE id = $1;
            `
            , [id]
        );
        return resultado.rows;
    }
};

//Exportar o models de tarefa
module.exports = TarefaModel;

// ( async () => {
//     const mostrar = await TarefaModel.deleteTarefa('1b0ce738-4fe0-4708-a4d6-f25fe661ba9a');
//     console.log(mostrar);
// })();