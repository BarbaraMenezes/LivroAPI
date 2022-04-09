const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();

app.use(cors());
app.use(express.json());

const port = 9000;

app.get('/',()=>{
res.send("Olá mundo!");
});

app.listen(port,()=>{
    console.log(`O servidor está executando na porta ${port}!`);
});