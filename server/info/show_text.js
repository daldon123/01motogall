const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.post('/show_text',(req, res, next)=>{
    console.log('/show_text 호출됨')
    const id = req.body.indexs
    console.log(id)
    const sql = `select * from motogall_border_write where id=${id}`


    db.query(sql, (err, rs)=>{
        res.send(rs)
    })
})



module.exports = app;