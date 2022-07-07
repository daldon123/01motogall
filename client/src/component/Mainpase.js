import React from 'react'
import Topbanner from './Topbanner'
import styled from "styled-components"
import Writetext from './Writetext'
import Showlist from './Showlist'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Showtext from './Showtext'
import Signup from './Signup'
import Login from './Login'
import { useState, useEffect } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Mainpase = () => {

  const [login, setlogin] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem('userid') === null ){
    }else{
      setlogin(true)
    }
  },[])
  console.log(sessionStorage.getItem('userid'))
  console.log('login :', login)

  return (
    <BrowserRouter>
      <Container>
        <Topbanner login={login}/>
        <Routes>
          <Route path='/' element={<Showlist/>}/>
          <Route path='/Writetext' element={<Writetext login={login}/>}/>
          <Route path='/Showtext/:no' element={<Showtext/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default Mainpase