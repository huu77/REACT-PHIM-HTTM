import React, { useState } from 'react';

function CommentInput({ onCommentSubmit }:{onCommentSubmit:any}) {
  const [comment, setComment] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim() !== '') {
      onCommentSubmit(comment);
      setComment('');
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Thêm bình luận..."
        value={comment}
        onChange={handleInputChange}
        className="border rounded-l p-2 w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Gửi
      </button>
    </div>
  );
}

export default CommentInput;
