//Atribui um novo objeto com o que foi exportado 
const UsuarioModel = require('../models/usuario');

//Objeto com as funções(métodos) do controller do usuario
const UsuarioController = {
    //Pegar todos os usuários
    async getAllUsuarios(req, res) {
        try {
            const usuarios = await UsuarioModel.getAllUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    //Pegar algum usuário usando o id
    async getUsuarioById(req, res) {
        try{
            const usuario = await UsuarioModel.getUsuarioById(req.params.id); //acessar a requisição de algo envolvendo rotas = req.params.algo (/home/:algo)
            if(usuario){
                res.status(200).json(usuario);
            }
            else{
                res.status(404).json({
                    error: 'Usuário não encontrado'
                });
            }
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },

    async createUsuario (req,res) {
        try{
            //Pegar o nome email e senha colocados, como vem json, criou-se um objeto para guardá-los
            //Como é apenas o corpo de um requisição = req.body
            const {nome, email, senha} = req.body;
            //Cria uma constante para criar um novo usuário utilizando as informações obtidas
            const novoUsuario = await UsuarioModel.createUsuario(nome, email, senha);

            res.status(201).json(novoUsuario);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    //Controller de apagar um usuário
    async deleteUsuario (req, res){
        try{
            
            //Pegar o usuário que vai ser deletado
            const usuarioDeletado = await UsuarioModel.deleteUsuario(req.params.id);

            if(usuarioDeletado){
                //resposta da requisição api
                res.status(200).json(usuarioDeletado);

            }
            else {
                res.status(404).json({
                    error: 'Usuário não encontrado'
                })
            }


        } catch (error) {
            res.status(500).json({ error: error.message});

        }
    },

    //Controller para o atualizar o usuario
    async updateUsuario(req, res){
        try{
            const {id, nome, email, senha} = req.body;

            //Usuário atualizado 
            const usuarioAtualizado = await UsuarioModel.updateUsuario(id, nome, email, senha);
            res.status(200).json(usuarioAtualizado);

        } catch (error) {
            res.status(500).status({
                error: error.message
            });

        }
    }

};

module.exports = UsuarioController;