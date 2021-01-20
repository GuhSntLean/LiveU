require('dotenv/config');

const Connection = require('tedious').Connection;

const config= {
  server: process.env.SERV_DATA_BASE,
  port: process.env.PORT_DATA_BASE,
  options: {
    database: process.env.NAME_DATA_BASE,
    encrypt: false,
  },
  authentication: {
    type: 'default',
    options: {
      userName: process.env.USER_DATA_BASE,
      password: process.env.PASS_DATA_BASE,
    }
  }
};

const conn = () => {
  const connection = new Connection(config);
  connection.on('connect', (err) => {
    if(err){
      console.log(`Error ${err}`);
    }else{
      console.log("Conectado ao banco de dados");   
      connection.close(); 
    }
  });
    console.log("Conectado ao banco de dados");
    return(connection);
}

module.exports = conn;

