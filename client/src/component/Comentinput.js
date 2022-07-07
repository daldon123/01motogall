import styled from "styled-components"
import { useState } from 'react';
import axios from "axios";

const Coment = styled.div`
    width: 100%;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid rgba(40,79,240,0.8);
`
const Coments = styled.textarea`
    min-width: 90%;
    height: 50px;
    border: rgba(0,0,0,0);
    outline: rgba(0,0,0,0);
    font-size: 20px;
`
const Btn3 = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
`
const Btn4 = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgba(40,79,240,0.9);
    &:hover{
        background-color: #7186DD;
    }
`
const Comentinput = ({s_id, index, f_id,f_s_id ,s_index}) => {
    console.log(s_id)
    const sendreply = ()=>{
        axios.post('http://localhost:4000/reply_show',{
            f_s_id:f_s_id,
            f_id:f_id,
            s_id:s_id,
            indexs:index,
            s_indexs:s_index,
            reply:reply,
            nickname:sessionStorage.getItem('userid') || '비공개',
        })
        document.location.reload();
    }
    // 내용저장
    const [reply, setreple] = useState('')
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%'}}>       
            <Coment>
                <Coments placeholder="댓글을 입력해주세요" onChange={(e)=>{setreple(e.target.value)}}/>
                <Btn3>
                    <Btn4 style={{marginBottom:'10px', color:'white'}} onClick={sendreply}>작성하기</Btn4>
                </Btn3>
            </Coment>
    </div>
  )
}

export default Comentinput