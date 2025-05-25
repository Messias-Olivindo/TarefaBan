//pegar a pool do database
const { pool } = require('../config/database');
const fs = require('fs'); //pega o módulo para realizar leitura, alterar arquivos e outras ações
const path = require('path'); //pega o módulo para consultar o caminho de um arquivo, extensão e outras coisas relacionadas ao caminho

//Função que pode demorar para realizar uma ação mas não empata a realização de outras ações
const runSql = async () => {

    //Maneira de pegar o caminho de um arquivo que eu quero realizar alguma ação
    //Basicamente eu pego o caminho do arquivo que o código está e junto com o nome do arquivo que eu quero ler ou mexer
    const filePath = path.join(__dirname, 'init.sql');

    //Maneira de ler um arquivo
    //A constante fica "pronta" quando o sistema termina de ler todo o arquivo -> uso do await junto ao async
    //promises serve para evitar o uso de callbacks e deixar o código mais organizado
    //Tenta realizar a função principal
    try {
        const file = await fs.promises.readFile(filePath, 'utf-8'); //Ler o arquivo e guarda em uma constante
        
        //Enviar o arquivo para o banco de dados por meio de uma query a partir de uma pool (conexão) criada com o banco de dados
        //Já que é para criar tabelas, deve-se usar o método de try e catch

        try{
            //Espera enviar todas as tabelas ao banco de dados1
            await pool.query(file);

            console.log('Tabelas criadas!');
        } catch (erro) {
            console.error('Erro na criação das tabelas:', erro);
        }

    } catch (erro) { //Se não conseguir fazer a função do try ele pega o erro e depois mostra na messagem
        console.error("Erro ao ler o arquivo:", erro);
    }


}

runSql();
