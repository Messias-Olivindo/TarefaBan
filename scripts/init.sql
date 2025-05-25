CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabela do usuário
CREATE TABLE IF NOT EXISTS usuario (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  email VARCHAR(320) NOT NULL,
  senha VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de tarefas
CREATE TABLE IF NOT EXISTS tarefas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo VARCHAR (60) NOT NULL,
  descricao TEXT,
  estado VARCHAR (12) NOT NULL,
  importancia VARCHAR (9) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  prazo DATE
);

-- Tabela de notificação
CREATE TABLE IF NOT EXISTS notificacao (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo VARCHAR(60) NOT NULL,
  descricao TEXT,
  id_tarefa UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de categoria
CREATE TABLE IF NOT EXISTS categoria (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo VARCHAR(60) NOT NULL
)