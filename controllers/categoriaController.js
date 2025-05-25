//Conectar com o model
const CategoriaModel = require('../models/categoria');

//Objeto do controller para ser exportado
const CategoriaController = {
    //Controller de criar uma categoria
    async createCategoria(req, res) {
        try {
            //enviar informação pro model e ficar com o resultado
            const {titulo} = req.body;
            const categoria = await CategoriaModel.createCategoria(titulo);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    //Controller de pegar todas as categorias
    async getAllCategoria(req, res) {
        try {
            //Mandar informação pro model e guardar o resultado
            const categorias = await CategoriaModel.getAllCategoria();
            res.status(200).json(categorias)
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    },

    //Controller de pegar uma categoria
    async getCategoriaById(req, res) {
        try {
            //mandar a informção parao model e ficar com o resultado
            const categoria = await CategoriaModel.getCategoriaById(req.params.id);
            //verificar se existe
            if (categoria) {
                res.status(200).json(categoria);
            }
            else{
                res.status(404).json('Categoria não encontrada');
            }
        } catch (error) {
            res.status(500).json({
                error: error.message
            })

        }
    },

    async deleteCategoria(req, res){
        try{
            //manda pro model e fica com o resultado
            const categoriaDeletada = await CategoriaModel.deleteCategoria(req.params.id);
            //verificar se a categoria existe
            if(categoriaDeletada){
                res.status(200).json(categoriaDeletada);
            }
            else{
                res.status(404).json('Categoria não encontrada');
            }

        } catch(error) {
            res.status(500).json(
                {error: error.message}
            );
        }
    }
}
//exportar o controller
module.exports = CategoriaController;