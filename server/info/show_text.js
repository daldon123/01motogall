const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/db');
const app = express();
var fs = require('fs');


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

app.post('/show_img',(req, res, next)=>{
    console.log('/show_img 호출됨')
    

    const idpk = req.body.idpk
    // console.log(idpk)
    const sql = `select path1 from boder_img where idpk='${idpk}';`
    db.query(sql, (err, rs)=>{
        // console.log(rs[0])
        res.send(rs[0])
    })
})



app.get('/show_img2',(req, res, next)=>{
    console.log('/show_img2')
    const path1 = req.query.path
    console.log('./uploads/'+path1)
    
    fs.readFile('./uploads/'+path1, (err, data)=>{
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.end(data);
    })

})



module.exports = app;