-- Tabela do usuário
CREATE TABLE IF NOT EXISTS usuario(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(80) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);

-- Tabela de tarefas
CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(60) NOT NULL,
    descricao TEXT,
    estado VARCHAR(12) NOT NULL,
    importancia VARCHAR(9) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    prazo DATE
);

-- Tabela de notificação
CREATE TABLE IF NOT EXISTS notificacao (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(60),
    descricao TEXT,
    id_tarefa INTEGER REFERENCES tarefas(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de categoria
CREATE TABLE IF NOT EXISTS categoria(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(60) NOT NULL
);