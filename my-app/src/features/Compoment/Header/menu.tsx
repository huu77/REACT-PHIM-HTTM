import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,useLocation  } from 'react-router-dom';

function MyComponent() {
 

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='block items-center md:flex items-center mr-2 lg:hidden '>
            <div className='relative'>
                <button
                    onClick={toggleDropdown}
                    className='flex items-center'
                >
                    <MenuIcon fontSize='large' />
                </button>
                {isDropdownOpen && (
                    <div className='absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-lg'>
                        <ul>
                            <li className='py-2 px-4 w-24 hover:bg-gray-100 'onClick={() => setIsDropdownOpen(false)} ><Link to='/home'>TRANG CHỦ</Link></li>
                            <li className='py-2 px-4 hover:bg-gray-100 w-24' onClick={() => setIsDropdownOpen(false)} ><Link to='/home/test1'>PHIM</Link></li>
                            <li className='py-2 px-4 hover:bg-gray-100 w-24' onClick={() => setIsDropdownOpen(false)} ><Link to='/home/test2'>VIDEO</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyComponent;
