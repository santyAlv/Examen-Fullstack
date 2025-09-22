const express = require('express');
const path = require('path');
const app = express()

require('dotenv').config;
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {

    console.log(`http://localhost:${PORT}`);

})

const conexionDB = require('./server/database.js');

const cors=require('cors');


app.use(cors())
app.use(express.json())

app.get('/productos',(req,res) =>{

const sql='SELECT * FROM productos'

conexionDB.all(sql,[],(Error,filas)=>{
    if (Error) {
        return res.status(500).json({Error: 'no se cargaron los productos'})
    } else {
       res.json (filas)
    }




})

    })
    




