import { useState } from "react";
import AddCommentInput from "./AddCommentInput";

const Comment = ({ comment }: { comment: any }) => {
  const [currentComment, setCurrentComment] = useState(comment);

  return (
    <>
      <div className="bg-white text-black my-2 w-full p-2 rounded-xl">
        <div className="flex items-center gap-3">
          <img
            src="https://hypixel.net/attachments/95f9b175-fac4-4018-9e3e-1f043b6689aa-jpeg.1928357/"
            alt={currentComment.author.name}
            className="w-10 rounded-full"
          />
          <span className="font-medium">{currentComment.author.name}</span>
        </div>
        <p className="py-5">{currentComment.content}</p>
        <AddCommentInput setCurrentComment={setCurrentComment} />
      </div>
      {currentComment.replies.length > 0 &&
        currentComment.replies.map((reply: any) => (
          // recursion
          <div className="border-l-2 border-gray-500 pl-12">
            <Comment comment={reply} />
          </div>
        ))}
    </>
  );
};

export default Comment;
