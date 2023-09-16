import React ,{useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const index = () => {
  const navigation=useNavigate()
 


    return (
        <> <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <span className='mx-2 text-bold'>Your Info</span>
            </div>
             
            
           
          </nav>
      
        </header>
  
     
      </div>
        </>
    )
}

export default index
