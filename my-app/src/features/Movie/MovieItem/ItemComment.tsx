import React, { useState } from 'react';
import LikePost from './likePost';
import { dataPost } from './comment';

type Post = {
  [x: string]: any;
  id: number;
  name: string;
  comment: string;
  idPostLike: number[];
  idComment: number[];
  idParent: number;
};

const ItemComment = ({ data, parentId }: { data: Post[]; parentId: number }) => {
  const items = data.filter((item) => item.idParent === parentId);
  const [isHide, setIsHide] = useState(false)

  const [comment, setComment] = useState('');
  
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setComment(event.target.value);
  };

  const handleSubmit = (name: string) => {
    if (comment.trim() !== '') {
      // dataPost.push({})
      console.log(comment,name);
      
      setComment('');
    }
  };
  // const handleInputKeyPress = (event: { key: string; }) => {
  //   if (event.key === 'Enter') {
  //     handleSubmit();
  //   }
  // };
  return (
    <>
      <div className="p-6 my-4 rounded-lg border border-gray-100" >
        {items.map((item, index) => (
          <div key={index}>

            <p className="mb-2 font-semibold text-blue-600" >{item.name}</p>
            <p className="text-gray-800">{item.comment}</p>
            <LikePost childComment={item.idComment} setIsHide={setIsHide} isHide={isHide} />
            {isHide && <ItemComment data={data} parentId={item.id} />}
            {isHide && <div className="flex">
              <input
                type="text"
                placeholder="Thêm bình luận..."
                value={comment}
                onChange={handleInputChange}
                className="border rounded-l p-2 w-full"
                // onKeyUp={handleInputKeyPress}
              />
              <button
                onClick={(e)=>handleSubmit(item.name)}
                className="bg-blue-500 text-white p-2 rounded-r"
              >
                Send
              </button>
            </div>}

          </div>

        ))}
      </div>

    </>
  );
};

export default ItemComment;
