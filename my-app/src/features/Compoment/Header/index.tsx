import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from '../SearchInput';
import Dropdown from '../Dropdow';
import MyComponent from './menu';
const initialData = [
    { ID: 1, TITLE: 'TRANG CHỦ', active: true, link: '/home' },
    { ID: 2, TITLE: 'PHIM ', active: false, link: '/home/test1' },
    { ID: 3, TITLE: 'VIDEO', active: false, link: '/home/test2' }
];
const index = () => {
    const navigation = useNavigate()
    const [data, setData] = useState(initialData);
    const handleClick = (id: any) => {
        const newData = [...data];

        // Đặt tất cả các phần tử active thành false
        newData.forEach(item => {
            item.active = false;
        });

        // Tìm phần tử có id trùng khớp và đặt active thành true
        const itemToActivate = newData.find(item => item.ID === id);
        if (itemToActivate) {
            itemToActivate.active = true;
        }

        // Cập nhật trạng thái với newData
        setData(newData);
    }

    // writting logic with api , get list have name like with name of api 

    const [textInput, setTextInput] = useState('');
    const [hasChanged, setHasChanged] = useState(false);

    const handleClick2 = () => {
        if (hasChanged) {

            console.log('Search icon clicked', textInput);
        }
        setHasChanged(false)
    };


    return (
        <> <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50 border-b-2">
                <nav className="flex items-center justify-evenly p-6 lg:px-8 bg-gray-100" aria-label="Global">
                     <MyComponent/>
                    <div className="w-full flex lg:flex-1 justify-between  items-center ">
                        <Link to="#" className="-m-1.5 p-1.5 ">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto "
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>

                        {/* item */}
                        <div className="hidden lg:flex lg:justify-evenly  flex-row mx-1 px-2  ">
                            {data.map((item, index) => (
                                <Link to={item.link} key={index} onClick={() => handleClick(item.ID)} className="flex justify-between">
                                    <span className={`block font-mono mx-3 text-ellipsis text-bold text-3xl ${item.active === true ? "text-fuchsia-900" : 'text-black-800 '} hidden md:block`}>{item.TITLE}</span>
                                </Link>
                            ))}
                        </div>
                        {/* input search */}
                        <SearchInput textInput={textInput}
                            setTextInput={setTextInput}
                            handleClick2={handleClick2}
                            setHasChanged={setHasChanged}
                        />
                        {/* bell  */}
                        <div className='flex'>
                            <CircleNotificationsIcon fontSize='large' className='hidden lg:block xl:text-2xl' />

                            {/* icon user */}
                            <Dropdown />
                        </div>




                    </div>



                </nav>

            </header>


        </div>
        </>
    )
}

export default index
