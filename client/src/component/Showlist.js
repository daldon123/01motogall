import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Tabs = styled.div`
    width: 55%;
    height: 40px;
    display: flex;
    margin-top: 10px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(40,79,240,0.8);
`
const Navibox = styled.div`
    width: 50%;
    display: flex;
`
const Navi1 = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 40px;
    background-color: rgb(40,79,240);
    margin-right: 10px;
    border: 1px solid rgba(0,0,0, 0.1);
    color: white;
    &:hover{
        background-color: rgba(40,79,240,0.8);
    }
`
const Navi2 = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 40px;
    background-color: white;
    margin-right: 10px;
    border: 1px solid rgba(0,0,0, 0.2);
    &:hover{
        background-color: rgba(0,0,0, 0.2);
    }
`
const Btnbox =styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`
const Btn = styled.a`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 40px;
    background-color: rgb(40,79,240);
    margin-right: 10px;
    color: white;
    &:hover{
        background-color: rgba(40,79,240,0.8);
    }
`
const List = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Index = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Index1 = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
`
const Index2 = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
`
const Index3 = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
`
const Index4 = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
`
const Lists = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`
const Colum = styled.div`
    text-decoration: none;
    color: black;
    cursor: pointer;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(197,197,197,0.8);
`
const Index2Link = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    width: 70%;
    &:hover{
        text-decoration: underline;
    }
`
const Pagingbox = styled.div`
    margin-top: 30px;
    width: 55%;
    height: 40px;
    display: flex;
    justify-content: center;
`
const Pagingbtn = styled.div`
    padding: 5px;
    margin: 0 3px;
    height: 30px;
    border: 1px solid #333;
    cursor: pointer;
    &:hover{
        background-color: rgba(40,79,240,0.5);
    }
    &:active{
        background-color: blueviolet;
    }
`
const Showlist = () => {

    const [data, setdata] = useState([])//글목록
    const [page, setpage] = useState(0)                    //현재 페이지
    console.log(page)
    useEffect(()=>{
        axios.get(`http://localhost:4000/show_list?page=${page}`)
        .then(rs=>setdata(rs.data))
        
    },[page])
    /* console.log(data) */
    
    const [num, setnum] = useState('')
    useEffect(()=>{
        axios.get(`http://localhost:4000/show_list_page`)
        .then(rs=>setnum(rs.data[0]['count(*)']))
    },[])
    console.log(page) //현재페이지
    const page1 = num / 10
    const page2 = Math.ceil(page1)
    
    const postsPerPage = 10;  //한번에 보여줄 페이지 갯수
    const [currentPage, setCurrentPage ] = useState(1);    //현재 페이지 블럭
    const [btn1, setbtn1] = useState(false)
    const [btn2, setbtn2] = useState(false)
    console.log(page2)//총페이지 갯수
    console.log(currentPage,"currentPage")
    useEffect(()=>{
        if(page2 > postsPerPage){
            setbtn1(true)
        }else{
            setbtn1(false)
        }
        if(page2 < indexOfLast){
            setbtn1(false)
        }

        if(currentPage >= 2){
            setbtn2(true)
        }else{
            setbtn2(false)
        }
        
    },[num,page2,currentPage,indexOfLast])
    
    const indexOfLast = currentPage * postsPerPage;  //최대 페이지 보여줄 갯수 처음 10개
    console.log(indexOfLast,"indexOfLast")
    const pagearray = [...Array(page2)].slice(indexOfLast-10,indexOfLast)

    const [btncolor, setbtncolor] = useState(1)
    console.log(btncolor,'btncolor')

  return (
    <Container>
        <Tabs>
            <Navibox>
                <Navi1>전체글</Navi1>
                <Navi2>인기글</Navi2>
            </Navibox>
            <Btnbox>
                <Btn href='/Writetext'>글쓰기</Btn>
            </Btnbox>
        </Tabs>
        <List>
            <Index>
                <Index1>번호</Index1>
                <Index2>제목</Index2>
                <Index3>글쓴이</Index3>
                <Index4>조회수</Index4>
            </Index>
            <Lists>
                {
                    data.map((data)=>(
                    <Colum key={data.id}>
                            <Index1>{data.id}</Index1>
                            <Index2Link onClick={()=>{ const ids = data.id
                                                         const vcount = data.views
                                                         axios.post('http://localhost:4000/count_views',{
                                                            ids:ids,
                                                            vcount:vcount
                                                         })                               
                            }} className='Linktext' to={`/Showtext/${data.id}`} >{data.title}</Index2Link>
                            <Index3>{data.nickname}</Index3>
                            <Index4>{data.views}</Index4>                        
                    </Colum>
                    ))
                }
            </Lists>
            <Pagingbox>
                {btn2&&<Pagingbtn onClick={()=>{setCurrentPage(currentPage-1)}}>이전</Pagingbtn>}
                {
                    pagearray.map((data, key)=>(
                        <Pagingbtn key={key} className={`${key+1 === btncolor ? 'active': ''}`} onClick={()=>(setpage(key),setbtncolor(key+1))}>
                            {key+1}
                        </Pagingbtn>
                    ))
                }
                {btn1&&<Pagingbtn onClick={()=>{setCurrentPage(currentPage+1)}}>다음</Pagingbtn>}
            </Pagingbox>
        </List>
    </Container>
  )
}

export default Showlist