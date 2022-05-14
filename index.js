const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(express.json());

const port = 9000;

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

app.get('/',()=>{
res.send("Olá mundo!");
});

const livroRoutes = require('./src/routes/Livro.routes');

app.use('/api/v1/livros',livroRoutes)

app.listen(port,()=>{
    console.log(`O servidor está executando na porta ${port}!`);
});
