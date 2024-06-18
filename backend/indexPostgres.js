const express = require("express");
require('dotenv').config()
const app = express();
const cors = require("cors");
const { Pool } = require('pg');
const port = process.env.PORT || 5000

const conString = process.env.DATABASE_URL

const pool = new Pool({
  connectionString: conString,
})

app.use(cors());
app.use(express.json());

app.get('/drawname/:length/:frequency', (req, res) => {
  const { length, frequency } = req.params
    let SQL = "SELECT nome, freqtotal FROM nomes WHERE (freqtotal > $1 and LENGTH(nome) = $2) ORDER BY random() LIMIT 1; ";
    pool.query(SQL, [frequency, length],  (err, result) => {
        if(err) throw(err);
        else res.send(result.rows[0])
    }) 
});

app.get('/search/:name', (req, res) => {
    const { name } = req.params
    let SQL = "SELECT 1 AS found FROM nomes WHERE nome = $1";
    pool.query(SQL, [name], (err, result) => {
        if(err) throw err;
        else res.send(result.rows[0])
    })
})

app.get('/totalavailable/:length/:frequency', (req, res) => {

    const { length, frequency } = req.params

    let SQL = "SELECT COUNT(nome) FROM nomes WHERE (freqtotal > $1 and LENGTH(nome) = $2); ";

    pool.query(SQL, [frequency, length],(err, result) => {
        if (err) {
          throw err
        } else{
          res.send(result.rows[0])
        }
      })
})

app.listen(port, () =>{
    console.log("Ok");
});