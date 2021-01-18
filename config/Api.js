require('dotenv');
const fetch = require('node-fetch');

const BASE_URL = process.env.URL_API;

const handleSave = async (data) => {
  console.log(data);
  return await fetch(`${BASE_URL}`,{
    method: 'POST',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data),
  })
};

module.exports = handleSave;