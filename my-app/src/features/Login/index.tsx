import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { isValidEmail, isStrongPassword } from '../../format'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface Form {
    email: string,
    password: string
}
interface ErrForm extends Form {
    loi: string;
}
const index = ():JSX.Element => {
    const [formData, setFormData] = useState<Form>({
        email: '',
        password: '',
    });

    // funtion check when user stop give data on input
    const debounceTime = 500; // Thời gian debounce (milliseconds)
    let debounceTimer: NodeJS.Timeout | null = null;

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
    const [err, setErr] = useState({});

    //loading
    const [loading, setLoading] = useState(false);
    const isValidation = () => {
        let isValid = true
        const enrrors: ErrForm = {
            email: '',
            password: '',
            loi: ''
        }
        //check username
        if (!formData.email || formData.email.trim() === '') {
            enrrors.email = "Please enter email..."
        } else {
            if (!isValidEmail(formData.email)) {

                enrrors.email = "Email is not format... "
            }
        }

        //check password
        if (!formData.password || formData.password.trim() === '') {
            enrrors.password = "Please enter a valid password."
        } else {
            if (!isStrongPassword(formData.password)) {
                enrrors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character. "
            }
        }


        if (Object.keys(enrrors).length > 0) {
            setErr(enrrors)
            isValid = false
        }
        else {
            setErr({})
        }
        return isValid
    }
    const handleSendForm = () => {
        console.log(formData);

    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <Link to={'/'}>
                <ArrowBackIcon/>
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
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                {/* email */}
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(value) => handleInputChange('email', value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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
