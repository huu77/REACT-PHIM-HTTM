import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const index = () => {
    const navigation=useNavigate()
 const logout=async()=>{
    localStorage.clear();
   navigation('/')
 }
    return (
        <>  
        <p>wellcom home page</p>
        <button onClick={logout}>click</button>
        </>
    )
}

export default index
