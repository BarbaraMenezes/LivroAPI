'use strict';
const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'teste',
    database: 'livraria'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log("Ocorreu um erro ao conectar ao banco de dados");
});

module.exports = dbConn;