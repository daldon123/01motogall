import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import axios from 'axios';
import Ckeditor from './Ckeditor';
// import Eidtor from './Eidtor';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`
const Inputdata1 = styled.div`
    width: 50%;
    display: flex;
    margin-bottom: 10px;
`
const Inputdata2 = styled.div`
    width: 50%;
    display: flex;
`
const Button = styled.div`
    color: white;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 50px;
    width: 110px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgba(40,79,240,0.9);
`
const Writetext = ({login}) => {
    useEffect(()=>{
        console.log(login) 
    },[login])
    

    const [ Write_text, setWrite_text] = useState({
        title:"",
        content:"",
    })


    const title_text = (e)=>{
        const title = e.target.value;
        setWrite_text({
            ...Write_text,
            title:title
        })
    }
    console.log(Write_text)

    const [usernick, setusernick] =useState('비공개')
    const send_Write_text = () =>{
        axios.post('http://localhost:4000/write_border',{
            title: Write_text.title || '제목없음',
            content: Write_text.content,
            nickname: sessionStorage.getItem('userid') || usernick,
        })
        document.location.href = '/Showlist'
    }

    
    useEffect(()=>{
        axios.get('http://localhost:4000/asd')
        .then(rs=>console.log(rs))
    },[])



    
  return (
    <Container>
        <Inputdata1>
            <input style={{width:'100%',height:'50px'}} type='text' placeholder='제목을 입력해주세요' onChange={title_text}/>
        </Inputdata1>
        <Inputdata2>
            {!login && <input style={{marginRight:'10px',width:'30%', height:'30px'}} type='text' placeholder='닉네임을 입력해주세요' onChange={(e)=>{setusernick(e.target.value)}}/>}
            {!login && <input style={{width:'30%', height:'30px'}} type='text' placeholder='비밀번호를 입력해주세요'/>}
        </Inputdata2>
        <div style={{margin:'30px 0px'}}>
            <ul>
                <li>쉬운 비밀번호를 입력하면 타인의 수정, 삭제가 쉽습니다.</li>
                <li>음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민, 형사상의 책임을 질 수 있습니다.</li>
            </ul>
        </div>
        <Ckeditor setWrite_text={setWrite_text} Write_text={Write_text} />
        {/* <Eidtor setWrite_text={setWrite_text} Write_text={Write_text}/> */}
        <Button onClick={send_Write_text}>작성하기</Button>
    </Container>
  )
}

export default Writetext