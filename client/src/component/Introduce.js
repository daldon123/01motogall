import React from 'react'
import styled from "styled-components"
import img from '../img/증명사진.jpg'
import skills from '../img/skills.png'
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Aboutme = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:.2px solid gray;
    padding-bottom: 100px;
    margin-top: 30px;
`
const Skills = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
    border-bottom:.2px solid gray;
    margin-bottom: 100px;
`
const Introduce = () => {
  return (
    <Container>
        <Aboutme>
            <h1 style={{borderBottom:'1px solid black',marginBottom:"30px"}}>About me</h1>
            <div style={{display:'flex', alignItems:'center',justifyContent:'center', border:'1px solid #ececec', padding:'50px', marginTop:'30px',borderRadius:"30px" , backgroundColor:'#ececec'}}>
                <img style={{width:'20%'}} src={img} alt='증명사진'/>
                <div style={{display:'flex', justifyContent:"flex-start"}}>
                    <div style={{display:'flex', flexDirection:"column", justifyContent:'space-between',marginRight:'40px',marginLeft:'40px'}}>
                        <i style={{display:'flex',marginTop:"30px", fontSize:"20px"}} className="fa-solid fa-user"><p>이름: 홍영호</p></i>
                        <i style={{display:'flex',marginTop:"30px", fontSize:"20px"}} className="fa-solid fa-calendar-check"><p>생년월일: 92.02.07</p></i>
                        <i style={{display:'flex',marginTop:"30px", fontSize:"20px"}} className="fa-solid fa-location-dot"><p>주소지: 인천 서구</p></i>
                    </div>
                    <div style={{display:'flex', flexDirection:"column", justifyContent:'space-between'}}>
                        <i style={{display:'flex',marginTop:"30px", fontSize:"20px"}} className="fa-solid fa-phone"><p>연락처:<br/>010-5814-0273</p></i>
                        <i style={{display:'flex',marginTop:"30px", fontSize:"20px"}} className="fa-solid fa-envelope"><p>이메일:<br/>rnfofl123@naver.com</p></i>
                        <i style={{display:'flex',marginTop:"30px", fontSize:"20px"}} className="fa-solid fa-clipboard"><p>수료과정명<br/>Full stack개발자, with react&ndoejs</p></i>
                    </div>
                </div>
            </div>
        </Aboutme>
        <Skills>
            <h1 style={{borderBottom:'1px solid black',marginBottom:"60px"}}>SKILLs</h1>
            <img style={{borderRadius:'20px'}} src={skills} alt="skills"/>
        </Skills>
    </Container>

  )
}

export default Introduce