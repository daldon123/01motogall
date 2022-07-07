
import { useEffect, useState } from 'react';
import axios from "axios";
import Comment from "./Comment";





const Reply = ({f_id,index}) => {
    

    const [shwocoment, setshwocoment] = useState([])
    useEffect(()=>{
        axios.post('http://localhost:4000/reply_shows',{
            f_id:f_id,
            indexs:index,
        })
        .then(res=>{
            setshwocoment(res.data)
        })
    },[f_id,index])
    console.log(shwocoment)


  return (
        <div style={{width:'95%',marginLeft:'10px'}}>
            {
                shwocoment.map((rs,key)=>(
                    <div key={key}>
                        <Comment s_index={index} textnum2={rs.textnum2} s_id={rs.id} s_nick={rs.nickname} f_s_id={f_id} s_comment={rs.coment} s_time={rs.times.substring(10)}/>
                    </div>
                ))
            }
        </div>
  )
}

export default Reply