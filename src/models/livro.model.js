'use strict';

var dbConn = require('./../../config/db.config');

var Livro = function (livro) {
    this.nome = livro.nome;
    this.lancamento = livro.lancamento;
    this.autor = livro.autor;
    this.anoPublicacao = livro.anoPublicacao;
    this.editora = livro.editora;
   // this.created_at = new Date();
   // this.update_at = new Date();
}

Livro.create = function (newLivro, result) {
    dbConn.query("INSERT INTO livro SET ?", newLivro, function (err, res) {
        if (err) {
            console.log("error:", err);
            result(null, err);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Livro.findById = function (id, result) {
    dbConn.query("select * from livro where idlivro = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Livro.findAll = function (result) {
    dbConn.query("Select * from livro", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("livro: ", res);
            result(null, res);
        }
    });
};

Livro.update = function (id, livro, result) {
    dbConn.query("UPDATE livro SET nome=?,lancamento=?,autor=?,anoPublicacao=?,editora=? where idlivro=?",
        [livro.nome,livro.lancamento, livro.autor, livro.anoPublicacao, livro.editora, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }

        }
    );
};

Livro.delete = function (id, result) {
    dbConn.query("DELETE FROM livro where idlivro = ?", [id],
     function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


module.exports = Livro;