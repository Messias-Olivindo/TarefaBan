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
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
|   └── assetsWadReadme/   # Arquivos de imagem do WAD e Readme     
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints

````

## 🤔 Como executar o projeto localmente?

&emsp; Para rodar o projeto na sua máquina, você precisará seguir os seguintes passos:

**Passo 1:**
Abra o terminal e clone o repositório com o seguinte comando:

````
git clone https://github.com/Messias-Olivindo/TarefaBan
````

**Passo 2:**
Abra o terminal na pasta do projeto e instale o express com os seguintes comando:

````
npm init -y
npm install express
````

**Passo 3:**
Com o terminal ainda aberto, instale as dependências node com o seguinte comando:

````
npm install
````

**Passo 4:**
Para rodar o projeto, basta colocar o seguinte comando no terminal da pasta do projeto:

````
node server.js
````