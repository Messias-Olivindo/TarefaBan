# 📌 TarefaBan

&emsp; O TarefaBan é um quadro de tarefas Kanban totalmente personalizado, perfeito para o gerenciamento das suas tarefas de acordo com a sua preferência

## 📂 Estrutura de pastas e arquivos

&emsp; A estrutura de pastas e arquivos do projeto está organizada da seguinte maneira:

````

TarefaBan/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── userController.js
|   └── tarefaController.js
|   └── notificacaoController.js
|   └── categoriaController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
|   └── usuario.js
│   └── tarefa.js
|   └── notificacao.js
|   └── categoria.js
├── views/                 # Definição das páginas de visualização do projeto
|   └── layout/            # Arquivo que servirá de base para o carregamento de outras páginas
|       └── main.ejs
|   └── pages/             # Arquivos de páginas da plataforma
|       └── addTarefa.ejs
|       └── editTarefa.ejs
|       └── home.ejs
|       └── quadro.ejs
|   └── partials           # Arquivos de componentes parciais de algumas páginas
|       └── footer.ejs
|       └── header.ejs
├── routes/                # Definição das rotas do sistema
│   └── usuarioRoutes.js
|   └── tarefaRoutes.js
|   └── notificacaoRoutes.js
|   └── categoriaRoutes.js
|   └── frontRoutes.js
├── assets/                # Arquivos públicos como imagens e fontes
|   └── assetsWadReadme/   # Arquivos de imagem do WAD e Readme     
├── scripts/               # Arquivos de JavaScript públicos
|   └── migrations # Arquivos com as migrations para criar as tabelas
|       └── 20250525_createUsuario.js
|       └── 20250525_createTarefas.js
|       └── 20250525_createNotificacao.js
|       └── 20250525_createCategoria.js
|   └── runMigrations.js # Rodas as migrations
|   └── init.sql # Arquivo SQL com as tabelas
|   └── runSql # Rodar o arquivo SQL
│   └── example.test.js
├── public/                # Arquivos públicos utilizados na aplicação web
|   └── assets/            # Arquivos de imagens utilizados na plataforma
|       └── example.png
|       └── logo.svg
|       └── pencil.png
|       └── trash.png
|       └── userIcon.png
|   └── fonts/             # Arquivos de fontes usados na aplicação
|   └── scripts/           # Arquivos de manipulação das páginas da aplicação
|       └── editTarefa.js
|       └── quadro.js
|       └── sendTarefa.js
|   └── styles/            # Arquivos de estilização das páginas
|       └── style.css
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo deve ser renomeado para .env após colocar as informações do banco de dados
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor

````

## 🤔 Como executar o projeto localmente?

&emsp; Para rodar o projeto na sua máquina, você precisará seguir os seguintes passos:

**Passo 1:**
Abra o terminal e clone o repositório com o seguinte comando:

````
git clone https://github.com/Messias-Olivindo/TarefaBan
````

**Passo 2:**
Com o terminal ainda aberto, instale as dependências node com o seguinte comando:

````
npm install
````

**Passo 3:**
Antes de continuar é necessário que você conecte o seu banco de dados Postgresql com a aplicação da seguinte maneira:

- Preencha as informações do seu banco de dados no .env.example

````
DB_HOST = 
DB_PORT = 
DB_USER = 
DB_PASSWORD = 
DB_NAME = 
DB_SSL=
````

Após preenchê-las, mude o nome do arquivo para .env

**Passo 4:**

Com o banco de dados conectado, é necessário que você crie as tabelas nele escolhendo algum dos seguintes comando.

- Você pode criar rodando as migrations com o seguinte comando no terminal:

````
npm run migrations
````

- Ou você pode rodar o arquivo SQL com o seguinte comando no terminal:

````
npm run runSql
````

É necessário rodar somente um desses comandos, não precisa rodar os dois!

**Passo 5:**
Para rodar o projeto, basta colocar o seguinte comando no terminal da pasta do projeto:

````
npm start
````

## 📽️ Demonstração da aplicação

[Assista no YouTube](https://youtu.be/MqsiQAV6Kn0)
