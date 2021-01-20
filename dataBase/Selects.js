require('dotenv');
const config = require('../config/Connection');

const tp = require('tedious-promises');
const TYPES = require('tedious').TYPES;

tp.setConnectionConfig(config.configPromisse);

const select = async () => {
  await tp.sql("SELECT * FROM tbs_cod_nome")
  .execute()
  .then((result) => {
    return result;
  })
  .fail((erro) => {
    console.log("Error: "+erro);
  })
}

module.exports = select;
