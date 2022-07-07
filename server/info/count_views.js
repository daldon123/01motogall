const express = require('express');
const db = require('../database/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post('/count_views',(req, res, next)=>{
    console.log('/count_views 호출됨')
    const ids = req.body.ids
    const vcount = req.body.vcount
    const sql = `update motogall_border_write set views = ${vcount}+1 where id = ${ids};`


    db.query(sql, (err, rs)=>{
        res.send(rs)
    })
})



module.exports = app;