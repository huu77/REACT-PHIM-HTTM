import React from 'react'

const index = (): JSX.Element  => {
  return (
    <div className="bg-gray-700 mt-10">
      <div className="py-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Your Website Name
      </div>
    </div>
  )
}

export default index