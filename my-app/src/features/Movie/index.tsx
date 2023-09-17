import React ,{useEffect} from 'react'
import { Link ,Outlet,useNavigate} from 'react-router-dom'
import Dropdown from '../Compoment/Dropdow'

const index = () => {
  const navigation=useNavigate()
 const name='Huu'


    return (
        <> <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only ">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <span className='mx-2 font-bold text-xl font-mono'>Your Info</span>
            </div>
             
              <div className='flex'>
                <h1 className='hidden sm:block font-bold'>Hi {name} !</h1>
              <Dropdown />
              </div>
           
          </nav>
      
        </header>
  <Outlet/>
     
      </div>
        </>
    )
}

export default index
