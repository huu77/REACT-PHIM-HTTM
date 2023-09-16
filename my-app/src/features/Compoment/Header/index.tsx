import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

import SearchInput from '../SearchInput';
import Dropdown from '../Dropdow';
const initialData = [
    { ID: 1, TITLE: 'TRUYEN HINH', active: true,link:'/home' },
    { ID: 2, TITLE: 'PHIM ', active: false ,link:'/home/test1'},
    { ID: 3, TITLE: 'VIDEO', active: false ,link:'/home/test2'}
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
                <nav className="flex items-center justify-evenly p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="#" className="-m-1.5 p-1.5 ">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto "
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                        {/* item */}
                        <div className="flex flex-row mx-1 px-2 justify-evenly">
                            {data.map((item, index) => (
                                <Link to={item.link} key={index} onClick={() => handleClick(item.ID)}>
                                    <span className={`block font-mono mx-3 text-ellipsis text-bold text-3xl ${item.active === true ? " text-fuchsia-900" : 'text-black-800 '}`}>{item.TITLE}</span>
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
                        <CircleNotificationsIcon fontSize='large' />
                        {/* icon user */}
                        <Dropdown />



                    </div>



                </nav>

            </header>


        </div>
        </>
    )
}

export default index