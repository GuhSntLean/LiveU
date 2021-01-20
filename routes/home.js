const express = require('express');
const { Connection } = require('tedious');
const router  = express.Router();

const api = require('../config/Api');
require('body-parser');

const dataBase = require('../config/Connection');

const data = {
  nome: String,
  sobrenome: String,
  email: String
}

const nome = {
  nome: String,
  
}

router.post('/register', async (req, res) => {
  data.nome = req.body.nome;
  data.sobrenome = req.body.sobrenome;
  data.email = req.body.email;

  const response = await api(data); 

  const separador = response.split(/[a-ｚA-Z+#]/g).filter((num) => {return num != "";});

  const nome = { nome: data.nome, cod: parseInt(separador[0]) };
  const sobrenome = { sobrenome: data.sobrenome, cod: parseInt(separador[1]) };
  const email = { email: data.email, cod: parseInt(separador[2]) };

  dataBase();

  res.render('home');
})

router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;