import styled from "styled-components"
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Reply from "./Reply";
import Comment from "./Comment";
import ShowtextMain from "./ShowtextMain";


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
    const [data, setdata] = useState({})
    useEffect(()=>{
        axios.post('http://localhost:4000/show_text',{
            indexs:indexs
        })
        .then(rs=>setdata(rs.data[0]))
    },[indexs])
    // console.log(data)

    const [idpk, setidpk] = useState([])


    useEffect(()=>{
        axios.post('http://localhost:4000/show_img',{
            idpk:data.idpk
        })
        .then(rs=>{
            setidpk(rs.data)
        })
    },[data])
    const path = JSON.stringify(idpk)
    const asd = JSON.parse(path).path1
    console.log(asd)
    
    




    // const path = JSON.stringify(idpk)
    // const path1 = JSON.parse(path)
    


    
    // 글삭제
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
            setshwocoment(res.data)
        })
    },[indexs])
    const inputref = useRef(null)
    const [showreple, setshowreple] =useState(true)

    // console.log(data.content)
    const nowtime = data.nowtime+''
    const day = nowtime.replace('T','').substring(0,10)
    const time =nowtime.replace('T','').substring(10,18)

    
    // const [img, setimg] =useState('')
    // // console.log(img)
    // if(asd){
    //     axios.get(`http://localhost:4000/show_img2?path=${asd}`)
    //     .then(rs=>setimg(rs.data))
    // }
    const con = data.content+''
    
  return (
    <>
        <Container>
                <Title>
                    <Titlesh3>{data.title}</Titlesh3>
                    <Titlesp>{data.nickname}</Titlesp> 
                    <Titlesp>{day}, {time} | 조회수:{data.views} | index:{data.id} <Btn onClick={deletepage}>글삭제</Btn></Titlesp>
                </Title>
                <ShowtextMain con={con} asd={asd}/>
                
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
    </>
  )
}

export default Showtext