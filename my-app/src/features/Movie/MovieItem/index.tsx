import React, { useState } from 'react'
import Video from './video'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import Comment from './comment'
import { Categories } from '../../Compoment';
import InputComment from './inputComment';
const index = () => {
    const [isText, setIsText] = useState<Boolean>(false)
    const [isLike, setIsLike] = useState<Boolean>(false)
    const handelLike = () => {
        setIsLike(!isLike)

    }
    
    
    return (
        <div>
            <div className='w-10 h-10'></div>
            <Video videoUrl={'https://www.youtube.com/watch?v=mAL03fAQZQk'} />
            <h2 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Highlights | Đừng Nói Dối Em - My Lovely Liar_Độc Quyền TV360
            </h2>
            <h2 className={`font-bold text-${isLike ? 'green' : 'blue'}-600 cursor-pointer mr-4 flex align-center`}
                onClick={() => handelLike()}>
                <ThumbUpIcon className='mr-3' />
                LIKE
            </h2>
            <button className='rounded-lg border-current border-2 px-4 mr-2 mt-2'>Danh cho ban</button>
            <button className='rounded-lg border-current border-2 px-4  mr-2 mt-2'>Phim Trung Quoc</button>
            <button className='rounded-lg border-current border-2 px-4  mr-2 mt-2'>Phim Hanh Dong</button>
            <div className='w-4/5 h-auto overflow-hidden'>

                <h2 className={isText ? 'text-ellipsis' : `truncate  `} onClick={() => setIsText(!isText)}>Đại Đường Vinh Diệu - The Glory Of Tang Dynasty phim thuộc thể loại dã sữ do Trung Quốc sản xuất xoay quanh câu chuyện nói về
                    Trầm Trân Châu một tiểu thư khuê cát nhưng bị ép phải làm phi tần Đại Đường Vinh Diệu - The Glory Of Tang Dynasty phim thuộc thể loại dã sữ do Trung Quốc sản xuất xoay quanh câu chuyện nói về
                    Trầm Trân Châu một tiểu thư khuê cát nhưng bị ép phải làm phi tần
                </h2>
            </div>
            {/* dien vien */}
            <div className='w-4/5 h-auto overflow-hidden'>
                <p className='text-ellipsis text-gray-500'>Dien Vien :Nguyen Thanh Huu , Luu quoc Phi , Pham Bang bang</p>
            </div>

            {/* dao dien */}
            <div className='w-4/5 h-auto overflow-hidden'>
                <p className='text-ellipsis text-gray-500'>Dao dien  :Nguyen Thanh Huu , Luu quoc Phi , Pham Bang bang</p>
            </div>
            {/* Quoc gia*/}
            <div className='w-4/5 h-auto overflow-hidden'>
                <p className='text-ellipsis text-gray-500'>Quoc Gia : Viet Nam</p>
            </div>
            <div>
                <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">
                    Comment
                </h2>
                <Comment  />
           
            </div>
            <div>
                <h2 className="mt-10  text-xl font-bold leading-9 tracking-tight text-gray-900">
                    TƯƠNG TỰ
                </h2>
                <Categories nameTitle={''} />
            </div>
        </div>
    )
}

export default index
