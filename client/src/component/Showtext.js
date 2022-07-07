import styled from "styled-components"
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Reply from "./Reply";
import Comment from "./Comment";


const Container = styled.div`
  width  : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`
const Title = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 2px solid black;
    margin-top: 20px;
`
const Titlesh3 = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 40px;
    color: black;
`
const Titlesp = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 40px;
    color: black;
`
const Btn = styled.button`
    margin-left: 10px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Maintext = styled.div`
    width: 55%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 2px solid black;
    margin-top: 20px;
`
const Coment = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid rgba(40,79,240,0.8);
    border-bottom: 1px solid rgba(40,79,240,0.8);
`

const Coments = styled.textarea`
    min-width: 90%;
    height: 100px;
    border: rgba(0,0,0,0);
    outline: rgba(0,0,0,0);
    font-size: 20px;
`
const Btn2 = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(40,79,240,0.9);
    &:hover{
        background-color: #7186DD;
    }
`
const Showcoment = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`
const Showcoments = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
`
const Btn3 = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
`
const Btn4 = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(40,79,240,0.9);
    &:hover{
        background-color: #7186DD;
    }
`


const Showtext = () => {

    const index =  useParams();
    const indexs = index.no;
    // console.log(indexs)
    const [data, setdata] = useState([])
    useEffect(()=>{
        axios.post('http://localhost:4000/show_text',{
            indexs:indexs
        })
        .then(rs=>setdata(rs.data))
    },[indexs])
    // console.log(data)
    
    const deletepage = () =>{
        axios.post('http://localhost:4000/delet_page',{
            indexs:indexs
        })
        document.location.href = '/'
    }


    // 댓글기능
    const [coment, setcoment] = useState('')
    const [showcoment, setshwocoment] = useState([])
    // console.log(coment)
    const sendcoment = ()=>{
        axios.post('http://localhost:4000/coment',{
            indexs:indexs,
            nickname:sessionStorage.getItem('userid') || '비공개',
            coment:coment
        })
        document.location.reload()
    }
    useEffect(()=>{
        axios.post('http://localhost:4000/coment_show',{
            indexs:indexs
        })
        .then(res=>{
            // console.log(res.data)
            setshwocoment(res.data)
        })
    },[indexs])
    const inputref = useRef(null)
    const [showreple, setshowreple] =useState(true)



  return (
    <>
    {
        data.map((rs,key)=>(
            <Container key={key}>
                    <Title>
                        <Titlesh3>{rs.title}</Titlesh3>
                        <Titlesp>{rs.nickname}</Titlesp> 
                        <Titlesp>{rs.nowtime.substring(0,19).replace('T',' ')} | 조회수:{rs.views} | index:{rs.id} <Btn onClick={deletepage}>글삭제</Btn></Titlesp>
                    </Title>
                    <Maintext>
                    {rs.content.replace(/<[^>]*>?/g,'')}
                    </Maintext>
                    <Showcoment>
                        {
                            showcoment.map((rs,key)=>(
                                <Showcoments key={key}>
                                        <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between',width:'100%'}}>
                                            <Comment f_nick={rs.nickname} f_id={rs.id} f_comment={rs.coment} f_time={rs.times.substring(10)} index={indexs}/>
                                            <Reply f_id={rs.id} index={indexs}/>
                                        </div>
                                </Showcoments>
                            ))
                        }
                    </Showcoment>

                    {showreple&&
                    <Btn3>
                        <Btn2 onClick={()=>{setshowreple(false)}}>댓글쓰기</Btn2>
                    </Btn3>}
                    {!showreple&&<Coment>
                        <Coments ref={inputref} placeholder="댓글을 입력해주세요" onChange={(e)=>{setcoment(e.target.value)}}/>
                        <Btn3>
                            <Btn4 style={{marginBottom:'10px', color:'white'}} onClick={sendcoment}>작성하기</Btn4>
                            <Btn4 style={{color:'white'}} onClick={()=>{setshowreple(true)}}>취소하기</Btn4>
                        </Btn3>
                    </Coment>}
                    
            </Container>
        ))
    }
    </>
  )
}

export default Showtext