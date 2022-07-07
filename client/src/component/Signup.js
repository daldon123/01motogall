import styled from "styled-components"
import { useState } from 'react';
import axios from 'axios';


const Container = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Titlebox = styled.div`
    width: 55%;
    border-bottom: 2px solid rgba(40,79,240,0.9);
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-start;
`
const TitleH1 = styled.div`
    font-size: 24px;
    text-align: center;
`
const Signupform = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(40,79,240,0.4);
    padding: 30px;
`
const Idinput = styled.input`
`
const Btn = styled.button`
    margin-top: 30px;
    border: rgba(40,79,240,0);
    background-color: rgba(40,79,240,0.4);
    width: 150px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
`
const Alert = styled.div`
    color: red;
`
const Signup = () => {
    //버튼 비활성화
    const [btn, setbtn] = useState(false)
    //id
    const [userid, setuserid] = useState('')
    const [idalert, setidalert] = useState(false)
    //pass
    const [userpass, setuserpass] = useState('')
    const [passalert, setpassalert] = useState(false)
    //passok
    const [userpassok, setuserpassok] = useState('')
    const [passokalert, setpassokalert] = useState(false)
    //email
    const [useremail, setuseremail] = useState('')
    const [emailalert, setemailalert] = useState(false)


    //id 유효성검사
    const userid_data =((e)=>{
        let korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        let etv = e.target.value
        setuserid(e.target.value)
        if(etv.length < 5 || etv.length > 13){
            console.log('5~13범위를 벗어남 오류')
            setidalert(true)
            setbtn(true)
        }
        if(etv.length > 4 && etv.length < 13){
            console.log('5~13범위 안입니다')
            setidalert(false)
            setbtn(false)
        }
        if(etv.length < 1){
            setidalert(false)
            setbtn(false)
        }
        if(korean.test(etv)){
            console.log('영문,숫자가 아입니다')
            setidalert(true)
            setbtn(true)
        }
    })
    //비밀번호 검사
    const userid_pass =((e)=>{
        let etv = e.target.value
        setuserpass(e.target.value)
        if(etv.length < 5 || etv.length > 13){
            console.log('5~13범위를 벗어남 오류')
            setpassalert(true)
            setbtn(true)
        }
        if(etv.length > 4 && etv.length < 13){
            console.log('5~13범위 안입니다')
            setpassalert(false)
            setbtn(false)
        }
        if(etv.length < 1){
            setpassalert(false)
            setbtn(false)
        }
    })
    //비밀번호 확인
    const userid_passok =((e)=>{
        let etv = e.target.value
        setuserpassok(e.target.value)
        if(etv!==userpass){
            setpassokalert(true)
            setbtn(true)
        }
        if(etv===userpass){
            setpassokalert(false)
            setbtn(false)
        }
        if(etv.length < 1){
            setpassokalert(false)
            setbtn(false)
        }
    })
    //이메일 확인
    const userid_email =((e)=>{
        let etv = e.target.value
        const emailRegex =/([a-z]|[A-Z]|[0-9])+@([a-z]|[A-Z]|[0-9])+.(com|net)/
        setuseremail(e.target.value)
        if(!emailRegex.test(etv)){
            setemailalert(true)
            setbtn(true)
        }
        if(emailRegex.test(etv)){
            setemailalert(false)
            setbtn(false)
        }
        if(etv.length < 1){
            setemailalert(false)
            setbtn(false)
        }
    
    })

    console.log(userid,userpass,userpassok,useremail)



    const postuserinfo =()=>{
        axios.post('http://localhost:4000/signup',{
            user_id:userid,
            user_pass:userpass,
            user_email:useremail
        })
        window.location.replace('/')
    }


  return (
    <Container>
        <Titlebox>
            <TitleH1>회원가입</TitleH1>
        </Titlebox>
        <Signupform>
            아이디
            {idalert&&<Alert>*아이디는 5글자 이상 13글자 이하의 영문과 숫자를 사용해주세요*</Alert>}
            <Idinput type='text' placeholder="아이디를 입력하세요" onChange={userid_data}/>
            비밀번호
            {passalert&&<Alert>*비밀번호는 5글자 이상 13글자 이하의 영문과 숫자를 사용해주세요*</Alert>}
            <Idinput type='password' placeholder="비밀번호를 입력하세요" onChange={userid_pass}/>
            비밀번호 재확인
            {passokalert&&<Alert>*비밀번호가 틀립니다 다시 확인해 주세요*</Alert>}
            <Idinput type='password' placeholder="비밀번호를 입력하세요" onChange={userid_passok}/>
            이메일
            {emailalert&&<Alert>*이메일 양식은 abc123@abc.com / .net 입니다*</Alert>}
            <Idinput type='email' placeholder="email" onChange={userid_email}/>

            <Btn onClick={postuserinfo} disabled={btn}>회원가입</Btn>
        </Signupform>
    </Container>
  )
}

export default Signup