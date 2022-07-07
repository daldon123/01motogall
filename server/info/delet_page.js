const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.post('/delet_page',(req, res, next)=>{
    console.log('/delet_page 호출됨')
    const id = req.body.indexs
    console.log(id)
    const sql = `delete from motogall_border_write where id = ${id}`


    db.query(sql, (err, rs)=>{
        res.send(err)
    })
})



module.exports = app;