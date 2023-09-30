import React, { useEffect, useState } from "react"
import UserChangeAvata from "./UserChangeAvata";
import LoadingSpinner from "../../../Loading";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/slice/userSlice";


export default function Example({ user, loading }: { user: any, loading: any }) {
  const dispatch = useDispatch();

  if (loading) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '500%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
        }}
      >

        <LoadingSpinner color="#F4E1F4" loading={loading} size={100} />
      </div>
    );
  }

  // Kiểm tra user trước khi hiển thị thông tin
  if (!user) {
    return <div>User not found</div>;
  }
  const [userData, setUserData] = useState({
    first: user?.name.first || "",
    last: user?.name.last || "",
    email: user?.email || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const hadleUpdate = () => {
    const formData:any = {
      name: {
        first: userData.first,
        last: userData.last
      },
      email: userData.email,
    }

    try {
      dispatch(updateUser({ user:user, formData :formData}));
    } catch (error) {
      console.log(error);

    }

  }
  return (
    <div>

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {/* name */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    {/* <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">First Name</span>
                      <input className="flex-shrink-0 text-gray-400 w-full" name="first" value={userData.first} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500" onClick={hadleUpdate}>
                      Change first
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    {/* <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Last Name</span>
                      <input className="flex-shrink-0 text-gray-400 w-full" name="last" value={userData.last} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500" onClick={hadleUpdate}>
                      Change Last
                    </button>
                  </div>
                </li>
              </ul>
            </dd>

          </div>
          {/* email */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    {/* <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <input className="flex-shrink-0 text-gray-400 w-full" name="email" value={userData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500" onClick={hadleUpdate}>
                      Change Email
                    </button>
                  </div>
                </li>

              </ul>
            </dd>
          </div>
          {/* role */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    {/* <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">

                      <span className="flex-shrink-0 text-gray-400"  > {user.role.toUpperCase()} </span>
                    </div>
                  </div>

                </li>

              </ul>
            </dd>
          </div>


          <UserChangeAvata user={user} />
        </dl>
      </div>
    </div>
  )
}
