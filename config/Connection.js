

const config= {
  server: process.env.SERV_DATA_BASE,
  options: {},
  authentication: {
    type: 'default',
    options: {
      userName: process.env.USER_DATA_BASE,
      password: process.env.PASS_DATA_BASE,
    }
  },
  options: {
    database: process.env.NAME_DATA_BASE,
    encrypt: true,
  }
};

module.exports = config;

