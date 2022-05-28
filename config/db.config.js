'use strict';
const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'livraria'
});

dbConn.connect(function(err){
    if(err){
      throw err
      console.log("Ocorreu um erro ao conectar ao banco de dados");
    }else{
    console.log("Conectado com sucesso! ");
    }
});

module.exports = dbConn;