require('dotenv');
const config = require('../config/Connection');

const tp = require('tedious-promises');
const TYPES = require('tedious').TYPES;

tp.setConnectionConfig(config.configPromisse);

const selectCode = async (data) => {
  const keys = Object.keys(data);
  const val  = Object.values(data);

  const table = `tbs_cod_${keys[0]}`

  const result = await tp.sql(`SELECT DISTINCT cod, soma FROM dbo.${table} WHERE cod = ${data.cod}`)
                         .execute()
                         .then((res) => {
                            console.log(res)
                            return res[0];
                          })
                          .fail((erro) => {
                            console.log(`Erro: ${erro}`);
                          })
 return result;
}

module.exports = { selectCode };
