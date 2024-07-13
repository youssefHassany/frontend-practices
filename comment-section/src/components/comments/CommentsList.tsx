import { commentsData } from "../../constants/commentsData";
import Comment from "./Comment";

const CommentsList = () => {
  return (
    <div className="w-full p-8">
      {commentsData.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
