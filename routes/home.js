const express = require('express');
const router  = express.Router();

const insert = require('../dataBase/Insets');
const select = require('../dataBase/Selects');

const api = require('../config/Api');
require('body-parser');

const data = {
  nome: String,
  sobrenome: String,
  email: String
}

router.post('/register', async (req, res) => {
  data.nome = req.body.nome;
  data.sobrenome = req.body.sobrenome;
  data.email = req.body.email;

  const response = await api(data); 

  const separador = response.split(/[a-ｚA-Z+#]/g).filter((num) => {return num != "";});

  nome = { nome: data.nome, cod: parseInt(separador[0])};
  sobrenome = { sobrenome: data.sobrenome, cod: parseInt(separador[1]) };
  email = { email: data.email, cod: parseInt(separador[2]) };

  await insert.insertData(nome);
  await insert.insertData(sobrenome);
  await insert.insertData(email);

  const somaNome = await select.selectCode(nome);
  const somaSobr = await select.selectCode(sobrenome);
  const somaEmai = await select.selectCode(email);

  const somaTotal = (parseInt(somaNome.cod) + parseInt(somaNome.soma))+(parseInt(somaSobr.cod) + parseInt(somaSobr.soma))+(parseInt(somaEmai.cod) + parseInt(somaEmai.soma));

  console.log(`Valor soma: ${somaTotal}`);

  res.render('home');
})

router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;