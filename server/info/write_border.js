const express = require('express');
const db = require('../database/db');
const app = express();
const multer = require('multer')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".");
    ext = ext[ext.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  }
});
const upload = multer({ storage: storage });

app.post('/uploads2', upload.any(), (req,res)=>{
  console.log('2번')
  console.log(req.files[0])
  // const path = req.files.file.path
})

app.post('/write_border', (req, res)=>{
    console.log('/write_border 호출됨')
    console.log(req.body)
    
    const title = req.body.title
    const content = req.body.content
    const nickname = req.body.nickname

    const sql = `insert into motogall_border_write (title, content, nickname) values('${title}', '${content}', '${nickname}')`
    db.query(sql, (err, rs)=>{
        res.send(content)
    })
    
})



module.exports = app;