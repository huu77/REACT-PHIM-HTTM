import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {Header,Footer,Categories} from '../Compoment'
import { Outlet } from 'react-router-dom';
const index = () => {
    const navigation=useNavigate()
  
    return (
        <>  
        <Header/>
        <Outlet/>
        </>
    )
}

export default index
