 
import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const LikePost = () => {
    const [isLike, setIsLike] = useState<Boolean>(true)
    const handelReply = () => {
        console.log('reply');

    }
  return (
    <div className="flex items-center mt-2 ">
    <h2 className={`font-bold text-${isLike ? 'green' : 'blue'}-600 cursor-pointer flex align-center`}
        onClick={() => setIsLike(!isLike)}>
        <ThumbUpIcon className='mr-2' />
        1 Likes
    </h2>
    <h2 className='font-bold mx-2 cursor-pointer' onClick={handelReply}>
        <span className='underline '>1 Reply</span>
    </h2>


</div>
  )
}

export default LikePost
