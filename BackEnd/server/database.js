const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbRuta = path.resolve(__dirname, "./sistema.db")

const db = new sqlite3.Database(dbRuta, (Error) => {


    if (Error) {
        console.Error(Error)
    } else {
        console.log("se hiso la base de datos")
    }


})

db.run(

    `
CREATE TABLE IF NOT EXISTS productos(
DNI INTEGER PRIMARY KEY,
Nombre TEXT,
Años INTEGER,
Nacionalidad TEXT,
Provincia TEXT,
localidad TEXT,
cp INTEGER

);
`

)

module.exports=db;