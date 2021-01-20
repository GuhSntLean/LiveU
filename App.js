const express = require('express');
const app = express();

require('dotenv/config');

const port = process.env.PORT;

const bodyParse  = require('body-parser');

const home = require('./routes/home');

const connection = require('./config/Connection');

connection();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname+'/src'));

app.use('/', home);
app.use('/register', home);

app.listen(port, () => {
  console.log(`Server is runing in port ${port}`)
});

module.exports = app;