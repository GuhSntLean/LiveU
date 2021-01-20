require('dotenv/config');

const fetch = require('node-fetch');
const jQuery =  require('jquery');


const response = async (data) => {

  const param = new URLSearchParams();
  param.append('nome', data.nome);
  param.append('sobrenome', data.sobrenome);
  param.append('email', data.email);

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: param,
  };

  const result = await fetch(`${process.env.URL_API}`, config)
                        .then( response => {return response.text()});

  return result;
}

module.exports = response;