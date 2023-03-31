const express = require('express');
const axios = require('axios');
const mysql = require('mysql');
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());                        

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "sakila"
})

// axios
//   .get('https://philna.sh/assets/merriweather-v13-latin-regular-433b7890abd98e0beeec9d5da44a1bbeb5b7e8f3d7aa50442a74289496da2b84.woff2')
//   .then(res => {
//     console.log(res);
//   })
//   .catch(error => {
//     console.error(error);
//   });

app.get('/test', (req, res) => {
  const q = "select * from actor";
  db.query(q, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})