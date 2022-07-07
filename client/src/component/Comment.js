import React, { useState } from 'react'
import Comentinput from './Comentinput'

const Comment = ({f_nick,f_id,f_comment,f_time,index,s_id,s_nick,s_comment,s_time,textnum2,f_s_id,s_index}) => {

    const [show, setshow] = useState(false)
    const showreply = ()=>{
        if(show===false){
            setshow(true)
        }else{
            setshow(false)
        }
    }
    
  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
        <div style={{width:'100%',display:'flex'}}>
            <div style={{display:'flex',width:'90%', alignItems:'center'}}>
                {textnum2&&<p style={{color:'rgba(0,0,0,0.5)',marginRight:'5px'}}>{f_nick}{textnum2}님에게</p>}
                <p style={{fontWeight:'bold', marginRight:'10px'}}>{f_nick}{f_id}{s_nick}{s_id}</p>
                <p onClick={showreply} style={{cursor:'pointer'}}>{f_comment}{s_comment}</p>
            </div>
            <p style={{marginRight:'10px',width:'10%'}}>{f_time}{s_time}</p>
        </div>
        {show&&<Comentinput s_id={s_id} f_id={f_id} f_s_id={f_s_id} index={index} s_index={s_index} />}
    </div>
  )
}

export default Comment