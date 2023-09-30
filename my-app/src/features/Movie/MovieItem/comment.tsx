import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InputComment from './inputComment';
import LikePost from './likePost';
import ItemComment from './ItemComment';
import { v4 as uuidv4 } from 'uuid';
type Post = {
  [x: string]: any;
  id: number;
  name: string;
  comment: string;
  idPostLike: number[];
  idComment: number[];
  idParent: number;
};

export const dataPost: Post[] = [
  {
    id: 1,
    name: 'Nguyen Thanh Huu',
    comment: 'hey day bro',
    idPostLike: [],
    idComment: [2, 3],
    idParent: 0,
  },
  {
    id: 2,
    name: 'Nguyen Thanh Hai',
    comment: 'hey men',
    idPostLike: [],
    idComment: [4,5],
    idParent: 1,
  },
  // Thêm các bản ghi dữ liệu khác
  {
    id: 3,
    name: 'John Doe',
    comment: 'Hello, world!',
    idPostLike: [],
    idComment: [],
    idParent: 1,
  },
  {
    id: 4,
    name: 'Alice Smith',
    comment: 'Nice post!',
    idPostLike: [],
    idComment: [],
    idParent: 2,
  },
  {
    id: 5,
    name: 'Alice Smith',
    comment: 'Nice post savdvsv!',
    idPostLike: [],
    idComment: [],
    idParent: 2,
  },
  // Thêm các bản ghi dữ liệu khác tại đây
];

function Comment() {
  
  const [comments, setComments] = useState<Post[]>(dataPost);
  let number = 0
  const maxValue = Math.max(...dataPost.map(item => item.idParent));
 


  const handleCommentSubmit = (newComment: Post) => {
    // chi cho idparent la 0
  // Thêm bình luận mới vào danh sách bình luận
  setComments([...comments, {
    id: uuidv4(),
    name: 'Thanh huu',
    comment: newComment as unknown as string,
    idPostLike: [],
    idComment: [],
    idParent: 0,
  }]);

   
  };

  return (
    <>

      <div className="mt-4 border">
         
            <ItemComment data={comments} parentId={0} />

            <InputComment onCommentSubmit={handleCommentSubmit}/>
      </div>

    </>
  );
}

export default Comment;
