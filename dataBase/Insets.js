require('dotenv');
const config = require('../config/Connection');

const tp = require('tedious-promises');
const TYPES = require('tedious').TYPES;

tp.setConnectionConfig(config.configPromisse);

const insertData = async (data) => {
  const keys = Object.keys(data);
  const val  = Object.values(data);

  const table = `tbs_${keys[0]}`;

  await tp.sql(`INSERT INTO ${table} (${keys[0]}, ${keys[1]}) VALUES ('${val[0]}', ${parseInt(val[1])})`)
          .execute()
          .then((response) => {
            console.log("APP: Inserido com sucesso");
          })
          .fail((erro) => {
            console.log(`Error: ${erro}`)
          });
  
}

module.exports = { insertData };