import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Navigation = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(40,79,240,0.9);
`
const Navigationbar = styled.div`
    width: 55%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Navi1 = styled.div`
    width: 70%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Navi2 = styled.div`
    width: 35%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 50px;

`
const StyledSubnav1 = styled(Link)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    &:hover{
        background-color: #7186DD;
    }
    border-right: 2px solid white;
`
const StyledSubnav2 = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    width: 30%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    &:hover{
        background-color: #7186DD;
    }
    
`
const StyledSubnav3 = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    width: 70%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    &:hover{
        background-color: #7186DD;
    }
`
const StyledSubnav4 = styled.div`
    text-decoration: none;
    margin-left: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: blue;
    font-weight: bold;
    font-size: 1.1rem;
    border: 1px solid white;
    border-radius: 70%;
    &:hover{
        background-color: #7186DD;
    }
`
const Aboutme = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:.2px solid gray;
    padding: 50px;
`

const Topbanner = ({login}) => {
    console.log('topbanner=',login)
    const user = sessionStorage.getItem('userid')

    const logout = ()=>{
        sessionStorage.clear()
        document.location.reload()
    }
  return (
    <Container>
        <Aboutme>
            <h1 style={{borderBottom:'1px solid black',marginBottom:"40px"}}>신입 Web Developer 홍영호를 소개합니다</h1>
            <p style={{fontWeight:'bold'}}>군인으로 7년, 용접사로 3년 이제는</p>
            <p style={{fontWeight:'bold'}}>계속해서 도전하는 개발자</p>
            <p style={{fontWeight:'bold'}}>공부하는것이 두렵지 않은 개발자</p>
            <p style={{fontWeight:'bold',marginBottom:"20px"}}>계속해서 노력하는 신입 개발자 홍영호입니다</p>
        </Aboutme>
        <Navigation>
            <Navigationbar>
                <Navi1>
                    <StyledSubnav1 style={{borderLeft:"2px solid white"}} to='/'>Introduce</StyledSubnav1>
                    <StyledSubnav1 to='/Showlist'>자유게시판</StyledSubnav1>
                    <StyledSubnav1 to='/Notics'>사진게시판</StyledSubnav1>
                    <StyledSubnav1 to='/Notics'>개발 과정</StyledSubnav1>
                </Navi1>
                <Navi2>
                    {!login && <StyledSubnav2 to='/Login'>로그인<i style={{fontSize:"15px",marginLeft:"3px"}} className="fa-solid fa-power-off"></i></StyledSubnav2>}
                    {!login && <StyledSubnav2 to='/Signup'>회원가입<i style={{fontSize:"15px",marginLeft:"3px"}} className="fa-solid fa-plus"></i></StyledSubnav2>}
                    {login && <StyledSubnav3 to='/'>환영합니다 {user}님</StyledSubnav3>}
                    {login && <StyledSubnav4 onClick={logout}><i className="fa-solid fa-right-from-bracket"></i></StyledSubnav4>}
                </Navi2>
            </Navigationbar>
        </Navigation>
    </Container>
  )
}

export default Topbanner