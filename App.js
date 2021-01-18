const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const handleSave = require('./config/Api');

const bodyParse  = require('body-parser');

const home = require('./routes/home');

app.use(bodyParse.urlencoded({extended : false}));
app.use(bodyParse.json());

app.set('view engine', 'ejs');

app.use('/', home);

app.listen(port, () => {
  console.log(`Server is runing in port ${port}`)
});