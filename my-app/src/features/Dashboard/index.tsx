import React ,{useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const index = () => {
  const navigation=useNavigate()
 
 useEffect(() => {
  checkUserToken();
}, []);

const checkUserToken = async () => {
  try {
    const token = localStorage.getItem('accessToken')
    if (token) {
      // Nếu userToken tồn tại, chuyển hướng vào trang Main
      navigation('/home')
    }
  } catch (error) {
    console.log('Lỗi khi kiểm tra userToken:', error);
  }
};
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
            </div>
             
            
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
              <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 mr-5 hover:text-blue-400">
                Log in  
              </Link>
              <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-400">
                Register  
              </Link>
            </div>
          </nav>
      
        </header>
  
         <h1>doasboard </h1>
      </div>
        </>
    )
}

export default index
