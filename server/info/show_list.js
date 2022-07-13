const express = require('express');
const db = require('../database/db');
const app = express();


app.get('/show_list',(req, res)=>{
    console.log('/show_list 호출됨')
    const page = req.query.page
    const num = page * 10
    console.log('페이지넘버',num)
    const sql = `select * from motogall_border_write order by id desc limit ${num},10;`
    db.query(sql, (err, rs)=>{
        res.send(rs)
    })
})

app.get('/show_list_page',(req, res)=>{
    console.log('/show_list_page 호출됨')
    const sql2 = `select count(*) from motogall_border_write;`
    db.query(sql2, (err, rs)=>{
        res.send(rs)
        console.log(rs)
    })
})


module.exports = app;