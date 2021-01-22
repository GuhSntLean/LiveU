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
                            console.log(res);
                            return res[0];
                          })
                          .fail((erro) => {
                            console.log(`Erro: ${erro}`);
                          })
 return result;
}

const selectJoin = async (data) => {
  const result = await  tp.sql(`SELECT * FROM tbs_cores AS aux
                                INNER JOIN tbs_paises AS p 
                                ON p.total = aux.total
                                INNER JOIN tbs_animais AS a
                                ON a.total = aux.total
                                WHERE NOT aux.cor = ANY(SELECT ce.cor FROM tbs_cores_excluidas AS ce
                                 WHERE ce.cor = ANY (SELECT c.cor FROM tbs_cores AS c 
                                 LEFT JOIN tbs_cores_excluidas AS cea
                                 ON cea.cor = c.cor)) AND aux.total = 14424`)
                          .execute()
                          .then((res) => {
                            console.log(res);
                            return res;
                          })
                          .fail((erro) => {
                            console.log(`Erro: ${erro}`);
                          });

  return result;
}

module.exports = { selectCode, selectJoin };
