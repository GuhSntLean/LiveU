require('dotenv/config');

const Connection = require('tedious').Connection;
const request = require('tedious-promises');

const config= {
    server: process.env.SERV_DATA_BASE,
    port: parseInt(process.env.PORT_DATA_BASE, 10),
    stream: false,
    authentication: {
      type: 'default',
      options: {
        userName: process.env.USER_DATA_BASE,
        password: process.env.PASS_DATA_BASE,
      }
    },
    options:{
      trustedConnection: true,
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true,
      database: process.env.NAME_DATA_BASE,
    }
  };

  const configPromisse = {
    server: process.env.SERV_DATA_BASE,
    port: parseInt(process.env.PORT_DATA_BASE, 10),
    userName: process.env.USER_DATA_BASE,
    password: process.env.PASS_DATA_BASE,
    database: process.env.NAME_DATA_BASE,
    options: {
      trustedConnection: true,
      encrypt: false,
      enableArithAbort: true,
      trustServerCertificate: true,
    }
  }

  const conn = () => {
    const connection = new Connection(config);
  
    connection.on('connect', (err) => {
      if(err){
        console.log(`Error: ${err}`);
        return err;
      }else{
        console.log(`APP: Connection to database was successful`);
      }
    })

    connection.on('error', (err) => {
      console.log(`Erro: ${err}`)
    });
  }

module.exports = {conn, config, configPromisse};

