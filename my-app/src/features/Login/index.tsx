import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isValidEmail, isStrongPassword, isValidation } from '../../format'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ErrForm, Form } from './type';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import requestApi from '../../axios';
import LoadingSpinner from '../../Loading';


const index = (): JSX.Element => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Form>({
        username: '',
        password: '',
    });

    // funtion check when user stop give data on input
    const debounceTime = 300; // Thời gian debounce (milliseconds)
    let debounceTimer: NodeJS.Timeout | null = null;
    // handle input change for input
    const handleInputChange = (name: string, event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // Hủy bỏ timer debounce hiện tại (nếu có)
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        // Thiết lập timer mới để thêm giá trị vào formData sau debounceTime
        debounceTimer = setTimeout(() => {
            setFormData({ ...formData, [name]: value });
        }, debounceTime);


    };
    // check
    const [err, setErr] = useState<ErrForm>({
        username: '',
        password: '',
        loi: ''
    });

    //loading
    const [loading, setLoading] = useState(false);

    const handleSendForm = async () => {
        // check err
        const { isValid, errors } = await isValidation(formData);
        //   if false show err 

        if (isValid === false) {
            toast.error('Có lỗi xảy ra. Vui lòng kiểm tra lại thông tin.');
            setErr(prevErr => ({
                ...prevErr,
                username: errors.username,
                password: errors.password,
                loi: errors.loi
            }));

        }
        else {
            setLoading(true)
            try {
                console.log(formData);

                // get api and save token and change path to home
                const x = await requestApi('auth/form/signin', 'POST', formData)
                
                const {accessToken,refreshToken}=x
                // save token
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                setLoading(false)

                navigate('/home')


            } catch (error) {
                setLoading(false)
                toast.error('Username or password is not valid');
            }
        }

    }

    return (
        <>
            <ToastContainer />
            {loading && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100px', // Đặt chiều rộng theo nhu cầu
                        height: '100px', // Đặt chiều cao theo nhu cầu
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Đặt màu nền xám,
                        borderRadius: '50%',

                    }}
                >
                    <LoadingSpinner color="#36D7B7" loading={loading} size={100} />
                </div>
            )}
            <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${loading ? 'opacity-50' : ''}`}>
                <Link to={'/'}>
                    <ArrowBackIcon />
                </Link>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6" >
                        <div>
                            <label htmlFor="username" className={`block text-sm font-medium leading-6  ${err.username !== "" ? 'text-orange-900' : 'text-gray-900'}`}>
                                Username
                            </label>
                            <div className="mt-2">
                                {/* email */}
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="text"
                                    required
                                    className={`${err.username !== "" ? 'text-orange-900 font-bold border-orange-600 border-1' : 'text-gray-900'} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    onChange={(value) => handleInputChange('username', value)}
                                />
                                <label className='text-orange-900 forn-size-1'>{err.username}</label>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className={`block text-sm font-medium leading-6  ${err.username !== "" ? 'text-orange-900' : 'text-gray-900'}`}>
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-2">
                                {/* password */}
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={(value) => handleInputChange('password', value)}
                                    className={`${err.username !== "" ? 'text-orange-900 font-bold border-orange-600 border-1' : 'text-gray-900'} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                />
                                <label className='text-orange-900 forn-size-1'>{err.password}</label>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleSendForm}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default index
