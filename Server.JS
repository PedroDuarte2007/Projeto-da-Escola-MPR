const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//Conexao com banco de dados (SGBD MySQL)
const con = mysql.createCLIConnection({
    users: 'root',
    host: 'localhost',
    database: 'Academia_Fit'
});

//Rota de Teste
const teste= (req,res) => {
    res.send("Back-End respondendo");
}

//CRUD - create
const createCLI= (req, res) => {
    let cpf = req.query.cpf;
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let altura = req.query.altura;
    let peso = req.query.peso;
    let endereço = req.query.endereço;
    let nascimento = req.query.nascimento;
    let query = `INSERT INTO  Clientes(cpf, nome, sobrenome, altura, peso, endereço, nascimento) VALUE`;
    query += `('${cpf}', '${nome}', '${sobrenome}', '${altura}', '${peso}', '${endereço}', '${nascimento}');`;
    con.query(query,(err,result)=>{
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
    console.log("Cadastrado com sucesso!");
}

// const createTre = (req, res) => {
//     let nome = req.query.nome;
//     let cpf = req.query.cpf;
//     let nascimento = req.query.nascimento;
//     let endereço = req.query.endereço;
//     let formacao = req.query.formacao;
//     let query = `INSERT INTO  Treinadores(nome, cpf, nascimento, endereço, formacao) VALUE`;
//     query += `('${nome}', '${cpf}', '${nascimento}', '${endereço}', '${formacao}');`;
//     con.query(query,(err,result)=>{
//         if (err){
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     });
//     console.log("Cadastrado com sucesso!");
// }

//CRUD - Read
const read = (req,res) => {
    con.query("SELECT * FROM Academia_Fit", (err, result) => {
        if (err)
            res.json(err);
        else
        res.json(result);

    });
}

//Configurações de Saida - Front-End
const app = express();
app.use(express.json());
app.use(cors());

//Rotas de Saide - Front-End
app.get("/", teste);
app.get("/Clientes/createCLI", createCLI);
// app.get("/Treinadores/createTre", createTre);
app.get("/Clientes", read);



//Teste e porta no console
app.listen(3000, () => {
    console.log("Cadastrado com Sucesso!");
});
