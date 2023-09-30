import React from 'react'
import { Categories, SlideComponent } from '../../Compoment'
import { ManyItem } from '../..'
const index = () => {
  return (
    <div className=' bg-gray-100 w-auto h-auto'>
      <div className='mt-10 w-full h-10'></div>
      <SlideComponent nameTitle={'Phim Đề Xuất'} number={4} />
      <Categories nameTitle={'Phim Đề Xuất'} />
      
      <ManyItem nameTitle={'Phim Đề Xuất'} />
    </div>
  )
}

export default index
