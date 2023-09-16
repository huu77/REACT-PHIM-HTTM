import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
function Dropdown() {
    const navigation = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    // get api , set name = name user
    const name = 'Chào Henry'
    const NameInfo='Thông tin'
    const items = [name, NameInfo, 'Đăng xuất'];
    const handleClick = (item: any) => {
        setIsOpen(false);
        if (item === 'Đăng xuất') {
            localStorage.clear()


            navigation('/')
        }
        else if(item === NameInfo){
            navigation('/info')
        }
        
        

    }
    return (
        <div className=' lg:mr-16 relative px-4 '>
            <div
                onClick={toggleDropdown}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
            >
                <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            {isOpen && (
                <ul className=" -translate-x-16  mt-4 md:mt-2 py-2 w-32 bg-white border rounded-lg shadow-lg absolute ">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(item)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
