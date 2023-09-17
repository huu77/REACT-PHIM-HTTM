import React, { ChangeEvent, useState } from 'react'
const apiUrl = import.meta.env.VITE_SOME_KEY
const UserChangeAvata = ({ user }: { user: any }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = async(event) => {
// get api from redux toolkit , chang initstate avatar and update 
            setSelectedImage(event.target?.result as string);

          };
          reader.readAsDataURL(file);
        
        }
      };
    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">

                            <div className="ml-4 flex min-w-0 flex-1 gap-2 ">

                                <img
                                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fill "
                                    src={selectedImage===null ? apiUrl+user.avatar :selectedImage}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <label   htmlFor="file" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Change Avatar
                            </label>
                            <input type="file" name="file" id="file" className='hidden' accept="image/*" onChange={(e)=>handleImageChange(e)}/>
                        </div>
                    </li>

                </ul>
            </dd>
        </div>
    )
}

export default UserChangeAvata
