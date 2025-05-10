# WAD - Web Application Document - 📌 TarefaBan

## Sumário

[1. Introdução](#c1)
[2. Diagrama do banco de dados](#c2)

## <a name='c1'>1. Introdução</a>

&emsp; O **TarefaBan** é uma solução web desenvolvida para auxiliar os usuários a gerenciar suas obrigações, por meio da organização em um quadro KanBan.

&emsp; A utilização do quadro KanBan está sendo aplicada em instituições estudantis e ambientes profissionais. Por ser uma ferramenta de gerenciamento simples e eficaz, muitas pessoas também usam esse método para o planejamento pessoal. No entanto, muitos desses quadros são feitos de maneira física, o que impossibilita o seu acesso remoto e a colaboração do dono que não está presente no local onde o quadro Kanban foi criado.

&emsp; Para resolver esse problema, projetou-se o **TarefaBan**: um site de gerenciamento de tarefas com base em um quadro KanBan. Nessa plataforma, o usuário pode criar, editar e deletar suas tasks em qualquer local e no momento que desejar. Dessa forma, é possível realizar o planejamento pessoal de maneira flexível e sem limitações dos quadros físicos.

## <a name='c2'>2. Diagrama do banco de dados</a>

&emsp; Em relação à modelagem do banco de dados do projeto, pode-se separar em modelo lógico e modelo físico:

### Modelo Lógico

&emsp; O modelo lógico da plataforma compreende a criação das entidades, a definição da cardinalidade dos relacionamentos entre elas e a definição de seus atributos junto ao seus respectivos tipos de dados correspondentes. A seguinte figura demonstra como ficou essa etapa:

<div align='center'>

<sup>Figura 1: Modelo Lógico do Banco de Dados</sup>

<img src='/assets/assetsWadReadme/modelagemConceitualBD.png'>
<sup>Fonte: Material produzido pelo autor (2025)</sup>

</div>

&emsp; A explicação de cada entidade e seus respectivos atributos está contida nos seguintes quadros:

<div align='center'>

<sup>Quadro 1: Entidade usuários</sup>

| Entidade | 
|:----:|
| **usuarios**: Usuários cadastrados na plataforma | 
| **Atributos** |
| **id (PK)**: Número de identificação do usuário |
| **nome**: Nome do usuário
| **email**: E-mail cadastrado pelo usuário
| **senha**: Senha cadastrado pelo usuário
| **created_at**: Momento em que o usuário foi criado
| **updated_at**: Momento em que o usuário alterou suas informações

<sup>Fonte: Material produzido pelo autor (2025)</sup>

</div>
<div align='center'>

<sup>Quadro 2: Entidade tarefas</sup>

| Entidade | 
|:----:|
| **tarefas**: Tarefas criadas pelo usuário | 
| **Atributos** |
| **id (PK)**: Número de identificação da tarefa |
| **nome**: Nome da tarefa
| **titulo**: Título da tarefa
| **descricao**: Descrição da tarefa
| **estado**: Estado da tarefa (planejamento, fazendo, feito)
| **importancia**: Importância da tarefa (altíssima, alta, média, baixa e baixíssima)
| **created_at**: Momento em que a tarefa foi criada
| **updated_at**: Momento em que a tarefa foi editada
| **prazo**: Data que a tarefa deve estar concluída

<sup>Fonte: Material produzido pelo autor (2025)</sup>

</div>
<div align='center'>

<sup>Quadro 3: Entidade categoria</sup>

| Entidade | 
|:----:|
| **categoria**: Categoria cadastrada pelo usuário| 
| **Atributos** |
| **id (PK)**: Número de identificação da categoria |
| **titulo**: Título da categoria (doméstica, profissional, educacional e outros)

<sup>Fonte: Material produzido pelo autor (2025)</sup>

</div>
<div align='center'>

<sup>Quadro 4: Entidade notificação</sup>

<div align='center'>

| Entidade | 
|:----:|
| **notificacao**: Notificação  | 
| **Atributos** |
| **id (PK)**: Número de identificação da tarefa |
| **titulo**: Título da notificação
| **descricao**: Descrição da notificação
| **id_tarefa (FK)**: Tarefa relacionada à notificação
| **created_at**: Momento em que a notificação foi criada

</div>

<sup>Fonte: Material produzido pelo autor (2025)</sup>

</div>

### Modelo Físico

&emsp; O modelo Físico do banco de dados compreende a criação das tabelas na linguagem SQL, e ficou da seguinte maneira:

&emsp; Criação da tabela de usuários:

````
CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(320) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEAFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEAFAULT CURRENT_TIMESTAMP
);
````
&emsp; Criação da tabela de tarefas:

````
CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(60) NOT NULL,
    descricao TEXT,
    estado VARCHAR(12) NOT NULL,
    importancia VARCHAR(9) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    prazo DATE
);
````

&emsp; Criação da tabela de categoria:

````
CREATE TABLE categoria(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(60) NOT NULL
);
````

&emsp; Criação da tabela de notificação:

````
CREATE TABLE notificacao(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(60),
    descricao TEXT,
    id_tarefa REFERENCES tarefas(id) ON DELETE CASCADE,
    created_at DEFAULT CURRENT_TIMESTAMP
);
````