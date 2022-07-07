const express = require('express');
const db = require('../database/db');
const app = express();


app.get('/show_list',(req, res)=>{
    console.log('/show_list 호출됨')

    const sql = `select * from motogall_border_write order by id desc;`
    db.query(sql, (err, rs)=>{
        res.send(rs)
    })
})


module.exports = app;