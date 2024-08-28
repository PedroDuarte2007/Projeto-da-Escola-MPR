const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//Conexao com banco de dados (SGBD MySQL)
const con = mysql.createCLIConnection({
    users: 'root',
    host: 'localhost',
    database: 'EscolaMIEF'
});

//Rota de Teste
const teste= (req,res) => {
    res.send("Back-End respondendo");
}

//CRUD - create
const createCLI= (req, res) => {
    let cpf = req.query.cpf;
    let nomecompleto = req.query.nomecompleto;
    let endereco = req.query.endereco;
    let nascimento = req.query.nascimento;
    let telefone = req.query.telefone;
    let plano = req.query.plano;
    let email = req.query.email;
    let genero = req.query.genero;
    let query = `INSERT INTO  Alunos(cpf, nome completo, endereco, nascimento, telefone, plano, email, genero) VALUE`;
    query += `('${cpf}', '${nomecompleto}, '${endereco}', '${nascimento}', '${telefone}', '${plano}', '${email}', '${genero}');`;
    con.query(query,(err,result)=>{
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
    console.log("Cadastrado com sucesso!");
}

//CRUD - Read
const read = (req,res) => {
    con.query("SELECT * FROM EscolaMIEF", (err, result) => {
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
app.get("/Alunos/createCLI", createCLI);
app.get("/Alunos", read);



//Teste e porta no console
app.listen(3000, () => {
    console.log("Cadastrado com Sucesso!");
});

// CRUD - Delete
const deleteClient = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM Clientes WHERE ClienteID = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente removido com sucesso', result });
        }
    });
}

// Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());

// Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/clientes", create); 
app.get("/clientes", read);


// Teste e porta no console
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
