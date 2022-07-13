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




const {v4} = require('uuid')
const uuid = () => {
  const tokens = v4().split('-')
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
}
uuid();


const makeidx =()=>{
  return idx = uuid()
}
app.use('/asd',(req,res,next)=>{
  makeidx()
  console.log(idx)
})

app.post('/uploadimg', upload.single('upload'), (req,res)=>{
  const path1 = req.file.filename
  const sql = `insert into boder_img (idpk,path1) values('${idx}','${path1}')`
  db.query(sql, (err, rs)=>{
    console.log(sql)
  })
})

app.post('/write_border', (req, res)=>{
  const title = req.body.title
  const content = req.body.content
  const nickname = req.body.nickname
  const sql = `insert into motogall_border_write ( title, content, nickname, idpk) values( '${title}', '${content}', '${nickname}', '${idx}')`
  db.query(sql, (err, rs)=>{
      console.log(sql)
  })

})




module.exports = app;