const express = require('express')
const cors = require('cors')
const app = express();
const write_border = require('./info/write_border')
const show_list = require('./info/show_list')
const show_text = require('./info/show_text')
const count_views = require('./info/count_views')
const Signup = require('./info/signup')
const userlogin = require('./info/userlogin')
const delet_page = require('./info/delet_page')
const coment = require('./info/coment')


const options = {
    origin: "*", // 접근 권한을 부여하는 도메인
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};
app.use(cors(options));
// app.use(cors());

app.use('/',write_border)
app.use('/',show_list)
app.use('/',show_text)
app.use('/',count_views)
app.use('/',Signup)
app.use('/',userlogin)
app.use('/',delet_page)
app.use('/',coment)


app.set('port',4000);
app.listen(app.get('port'),()=>{
    console.log(app.get('port')+'번 포트 실행중')
})