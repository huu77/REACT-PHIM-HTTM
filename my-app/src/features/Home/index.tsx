import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {Header,Footer,Categories} from '../Compoment'
import { Outlet } from 'react-router-dom';
const index = () => {
 
  
    return (
        <>  
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default index
