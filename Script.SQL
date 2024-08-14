drop database if exists Academia_Fit;
create database Academia_Fit;
use Academia_Fit;
create table Alunos(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    rg varchar(50) not null unique,
    nome completo varchar(100) not null,
    endereco varchar(50) not null, 
    nascimento date not null,
    telefone varchar(50) not null,
    mensalidade varchar(50) not null,
    email varchar(50) not null,
    genero varchar(50) not null
);
describe Alunos;

-- DML - Popular com dados de teste
insert into Alunos(cpf, rg, nome completo, endereco, nascimento, telefone, mensalidade, email, genero)
values
("111.111.111-11","Jair","Silva","1.70", "65", "Rua Itapira 504", "2007-07-05");

select * from Alunos;

-- Treinadores

create table Pais(
    id integer primary key auto_increment,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    cpf varchar(20) not null unique,
    nascimento date not null,
    plano varchar(50) not null,
    endereco varchar(50) not null
);
describe Pais;

insert into Treinadores(nome, sobrenome, cpf, nascimento, endereco)
values
("Rodrigo", "222.222.222-43", "1999-01-11", "Rua Penta 504");

select * from Pais;
