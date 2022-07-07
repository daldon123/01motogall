const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))





// const session = require('express-session')
// const FileStore = require('session-file-store')(session);
// app.use(session({
//     secret:'mysecret',
//     resave:false,
//     saveUninitialized:true,
//     store:new FileStore()
// }))

app.post('/userlogin',(req, res)=>{
    console.log('/userlogin 호출됨')
    const userid = req.body.userid
    const userpass = req.body.userpass
    const sql = `select * from motogall_userinform where userid = '${userid}' and userpass = '${userpass}';`
    db.query(sql, (err, rs)=>{
        if(rs.length < 1){
            res.send(false)
        }else{
            res.send(rs[0])
        }
        
    })
})






module.exports = app;