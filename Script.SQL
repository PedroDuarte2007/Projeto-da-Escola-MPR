drop database if exists EscolaMIEF;
create database EscolaMIEF;
use EscolaMIEF;
create table Alunos(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome completo varchar(100) not null,
    endereco varchar(50) not null, 
    nascimento date not null,
    telefone varchar(50) not null,
    plano varchar(50) not null,
    email varchar(50) not null,
    genero varchar(50) not null
);
describe Alunos;


insert into Alunos(cpf, nome completo, endereco, nascimento, telefone, plano, email, genero)
values
("111.111.111-11", "Pedro Duarte Naddeu Russo", "Rua Itapira - 504", "2007-07-05", "(19)97134-8235", "Normal", "pedronaddeu@gmail.com", "Masculino");

select * from Alunos;


