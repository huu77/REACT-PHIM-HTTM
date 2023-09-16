import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isValidEmail, isStrongPassword, isValidation, isValidation2 } from '../../format'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FromRegister, ErrFromRegister } from './type';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import requestApi from '../../axios';
import LoadingSpinner from '../../Loading';
import CompomentName from './compomentName'

const index = (): JSX.Element => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FromRegister>({
        username: '',
        lastname: '',
        firstname: '',
        password: '',
        confirmpassword: '',
        email: ''
    });

    const debounceTime = 300; // Thời gian debounce (milliseconds)
    let debounceTimer: NodeJS.Timeout | null = null;

    const handleInputChange = (name: string, event: ChangeEvent<HTMLInputElement>): any => {
        const value = event.target.value;

        // Cancel the current debounce timer (if any)
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        // Set a new timer to update formData after debounceTime
        debounceTimer = setTimeout(() => {
            setFormData((prevData: any) => ({ ...prevData, [name]: value }));
        }, debounceTime);

    };
    // check bi thieu email
    const [err, setErr] = useState<ErrFromRegister>({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        confirmpassword: '',
        email: ''

    });

    //loading
    const [loading, setLoading] = useState(false);

    const handleSendForm = async () => {
        // check err
        const { isValid, errors } = await isValidation2(formData);
        //   if false show err 

        if (isValid === false) {
            toast.error('Có lỗi xảy ra. Vui lòng kiểm tra lại thông tin.');
            setErr((prevErr: any) => ({
                ...prevErr,
                username: errors.username,
                password: errors.password,
                firstname: errors.firstname,
                lastname: errors.lastname,
                confirmpassword: errors.confirmpassword,
                email: errors.email
            }));

        }
        else {
            setLoading(true)
            try {
                const value = {
                    username: formData.username,
                    name: {
                        first: formData.firstname,
                        last: formData.lastname
                    },
                    email: formData.email,
                    password: formData.password,
                    repeatPassword: formData.confirmpassword
                }


                // get api and save token and change path to home
               const x= await requestApi('auth/form/signup','POST',value)
                console.log("value success",x);
                
                setLoading(false)
                toast.success('You create success ...')
                navigate('/login')

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
                        Register to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6" >
                        {/* username */}
                        <CompomentName labelTitle={'username'}
                            nameTitle={'username'}
                            err={err}
                            autoComplete={'text'}
                            handleInputChange={handleInputChange}
                        />
                        {/* firstname */}
                        <CompomentName labelTitle={'firstname'}
                            nameTitle={'firstname'}
                            err={err}
                            autoComplete={'text'}
                            handleInputChange={handleInputChange}
                        />
                        {/* lastname */}
                        <CompomentName labelTitle={'lastname'}
                            nameTitle={'lastname'}
                            err={err}
                            autoComplete={'text'}
                            handleInputChange={handleInputChange}
                        />
                        {/* email */}
                        <CompomentName labelTitle={'email'}
                            nameTitle={'email'}
                            err={err}
                            autoComplete={'text'}
                            handleInputChange={handleInputChange}
                        />

                        {/* password */}
                        <CompomentName labelTitle={'password'}
                            nameTitle={'password'}
                            err={err}
                            autoComplete={'password'}
                            handleInputChange={handleInputChange}
                        />
                        {/* confirmpassword */}
                        <CompomentName labelTitle={'confirmpassword'}
                            nameTitle={'confirmpassword'}
                            err={err}
                            autoComplete={'text'}
                            handleInputChange={handleInputChange}
                        />

                        <div>
                            <button
                                onClick={handleSendForm}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default index
