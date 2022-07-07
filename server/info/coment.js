const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.post('/coment',(req, res, next)=>{
    console.log('/coment 호출됨')
    const id = req.body.indexs
    const nickname = req.body.nickname
    const coment = req.body.coment

    const sql = `insert into motogall_coment (indexs, nickname, coment, times) value( '${id}', '${nickname}', '${coment}', now() );`
    console.log(sql)

    db.query(sql, (err, rs)=>{
        res.send(rs)
    })
})



app.post('/coment_show',(req, res)=>{
    console.log('/coment_show 호출됨')
    const id = req.body.indexs

    const sql = `select * from motogall_coment where indexs = ${id} and textnum = 0;`
    db.query(sql, (err, rs)=>{
        res.send(rs)
    })
})

app.post('/reply_show',(req, res)=>{
    console.log('/reply_show 호출됨')
    

    const indexs = req.body.indexs
    const nickname = req.body.nickname
    const reply = req.body.reply
    const f_id = req.body.f_id
    const s_id = req.body.s_id
    const f_s_id =req.body.f_s_id
    const s_indexs = req.body.s_indexs
    console.log(f_id)
    console.log(s_id)
    console.log(f_s_id)
    console.log(indexs)
    console.log(s_indexs)
    // console.log(sql)
    // console.log(sql2)
    console.log(req.body)
    const sql =`insert into motogall_coment (indexs,nickname,coment,textnum,textnum2,times) value(${indexs},'${nickname}','${reply}', ${f_id},${f_id}, now() );`
    const sql2 = `insert into motogall_coment (indexs,nickname,coment,textnum,textnum2,times) value(${s_indexs},'${nickname}','${reply}', ${f_s_id},${s_id}, now() );`
    if(s_id===undefined){
        console.log('1번작동')
        db.query(sql, (err, rs)=>{
            res.send(rs)
        })
    }else{
        console.log('2번작동')
        db.query(sql2, (err, rs)=>{
            res.send(rs)
        })
    }

})

app.post('/reply_shows',(req,res)=>{
    console.log('대댓글 불러오는중')
    const indexs = req.body.indexs
    const f_id= req.body.f_id
    const s_id= req.body.s_id
    console.log(req.body)
    
    const sql = `select * from motogall_coment where indexs = ${indexs} and textnum = ${f_id}`
    const sql2 = `select * from motogall_coment where indexs = ${indexs} and textnum = ${f_id} and textnum = ${s_id};`
    if(s_id===undefined){
        db.query(sql, (err, rs)=>{
            res.send(rs)
        })
    }else{
        db.query(sql2, (err, rs)=>{
            res.send(rs)
        })
    }

})




module.exports = app;