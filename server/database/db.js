const mysql =require('mysql')
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'dudghrkgus!23',
    database:'moto_gallery'
});
module.exports = db;