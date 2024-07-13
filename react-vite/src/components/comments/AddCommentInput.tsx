import { useState } from "react";

const AddCommentInput = ({
  setCurrentComment,
}: {
  setCurrentComment: React.Dispatch<any>;
}) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newComment = {
      id: "6686febea2c7148586264d8e",
      content: commentText,
      createdAt: "2024-07-04T22:57:50+03:00",
      editedAt: "2024-07-05T18:15:38+03:00",
      replies: [],
      author: {
        type: "brand",
        id: "6650298f58f246a1667e3a33",
        name: "omar khaled",
        picture:
          "https://dazzify.s3.us-east-1.amazonaws.com/brand-90594be5-71c5-4e7e-b90e-18d4b45deb5a-1720813174820.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAXWPOCK4EJMPOIWXI%2F20240713%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240713T082729Z&X-Amz-Expires=10800&X-Amz-Signature=27746a310d21b90ac77e87565103ff16eeddd9204dea860f3dfbf58a1d2b6fd3&X-Amz-SignedHeaders=host&x-id=GetObject",
        deletedAt: "",
        verified: true,
      },
    };

    setCurrentComment((prev: any) => {
      return {
        ...prev,
        replies: [...prev.replies, newComment],
      };
    });

    setCommentText("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" border border-gray-300 w-fit p-1 rounded"
    >
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="bg-transparent w-96 outline-none"
      />
      <button type="submit" className="p-3 bg-teal-500 rounded text-white">
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentInput;
