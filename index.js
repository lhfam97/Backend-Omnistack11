const express = require('express');

const app = express();

app.use(express.json);

app.get('/',(request,response)=>{
return response.json({
  evento: "Semana Omnistack",
  aluno: 'Luis Henrique Machado'
})});

app.listen(3333);