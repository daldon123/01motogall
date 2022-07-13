import { Link } from "react-router-dom"
import styled from "styled-components"
import headerimg from '../img/motogall_topbanner.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Headerimg = styled.img.attrs({src:`${headerimg}`})`
    width: 70%;
    height: 200px;
    margin: 0;
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
    width: 67%;
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
`
const Subnav1 = styled.div`
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
`
const StyledSubnav2 = styled(Link)`
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
const Topbanner = ({login}) => {
    console.log('topbanner=',login)
    const user = sessionStorage.getItem('userid')

    const logout = ()=>{
        sessionStorage.clear()
        document.location.reload()
    }
  return (
    <Container>
        <Headerimg/>
        <Navigation>
            <Navigationbar>
                <Navi1>
                    <StyledSubnav1 to='/Notics'>공지사항</StyledSubnav1>
                    <StyledSubnav1 to='/'>자유게시판</StyledSubnav1>
                    <Subnav1>거래게시판</Subnav1>
                    <Subnav1>바이크토론</Subnav1>
                    <Subnav1>사진게시판</Subnav1>
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