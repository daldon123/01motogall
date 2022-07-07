const express = require('express');
const db = require('../database/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post('/signup',(req, res)=>{
    console.log('/signup 호출됨')
    const userid = req.body.user_id
    const userpass = req.body.user_pass
    const useremail = req.body.user_email

    const sql = `insert into motogall_userinform (userid, userpass, useremail) values('${userid}', '${userpass}', '${useremail}')`
    db.query(sql, (err,rs)=>{
        console.log(rs)
    })

})



module.exports = app;