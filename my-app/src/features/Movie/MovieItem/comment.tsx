// Comment.js
import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InputComment from './inputComment'
import LikePost from './likePost'
function Comment() {
    
    const [comments, setComments] = useState<String[]>([]);

    const handleCommentSubmit = (newComment: any) => {
        setComments([...comments, newComment]);
    };
    return (<>
        <h2 className="mt-10  text-xl font-bold leading-9 tracking-tight text-gray-900">
            Comment
        </h2>
        <div className="mt-4">
            {comments.map((comment, index) => (
                <div className="border p-4 my-2 rounded-lg" key={index}>
                    <p className="mb-2 font-semibold">Thanh Huu</p>
                    <p>{comment}</p>
                 <LikePost/>

                </div>
            ))}
        </div>
        <InputComment onCommentSubmit={handleCommentSubmit} />
    </>
    );
}

export default Comment;
