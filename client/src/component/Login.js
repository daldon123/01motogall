import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import styled from "styled-components"

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
const Loginform = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(40,79,240,0.4);
    padding: 30px;
`
const Input = styled.input`
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

const Login = () => {
    // 
    const [userid, setuserid] = useState('')
    const [userpass, setuserpass] = useState('')
    const inputid = (e)=>{
        setuserid(e.target.value)
    }
    const inputpass = (e)=>{
        setuserpass(e.target.value)
    }
    // 

    const [userinfo, setuserinfo] = useState({})
    const [alert, setalert] = useState(userinfo.msg)
    
    
    useEffect(()=>{
        axios.post('http://localhost:4000/userlogin',{
            userid: userid,
            userpass: userpass
        })
        .then(res=>{
            setuserinfo(res.data)
            console.log(res.data)
        })
    },[userid,userpass])
    
    const Userlogin = ()=>{
        console.log('로그인버튼 클릭')
        console.log('id: '+userid)
        console.log('pw: '+userpass)   
        axios.post('http://localhost:4000/userlogin',{
            userid: userid,
            userpass: userpass
        })
        .then(res=>{
            setuserinfo(res.data)
            console.log(res.data)
        })
        .catch()
        if(!userinfo){
            setalert(true)
        }
        if(userinfo.userid){
            sessionStorage.setItem('userid', userid)
            document.location.href = '/'
        }
    }


  return (
    <Container>
        <Titlebox>
            <TitleH1>로그인</TitleH1>
        </Titlebox>
        <Loginform>
            아이디
            <Input type='text' placeholder='아이디를 입력해주세요'  onChange={inputid}/>
            비밀번호
            <Input type='password' placeholder='비밀번호를 입력해주세요' value={userpass} onChange={inputpass}/>
            <Btn onClick={Userlogin}>로그인</Btn>
            {alert && <Alert>*일치하는 아이디가 없거나 비밀번호가 틀렸습니다*</Alert> }
        </Loginform>
    </Container>
  )
}

export default Login