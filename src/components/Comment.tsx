import { commentType } from "../type/listComments";
import { useRef, useState } from "react";
import Reply from "./Reply";
import { useDispatch } from "react-redux";
import { addReply, deleteComment } from "../features/listComment";
const Comment = ({ comment }: commentType) => {
  const [showReply, setShowReply] = useState(false);
  const [showReplyComponent, setShowReplyComponent] = useState(false);
  const inputReply = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const handleReplyBtn = () => {
    setShowReply(true);
    setTimeout(() => {
      inputReply.current?.focus();
    }, 100);
  };
  const handleShowReplyComponent = () => {
    if (inputReply.current) {
      if (inputReply.current.value.length >= 1) {
        dispatch(
          addReply({
            inputText: inputReply.current.value,
            commentId: comment.id,
          })
        );
        setShowReplyComponent(true);
        setShowReply(false);
      }
    }
  };
  return (
    <div className="comment">
      <div className="profile-pic"> </div>
      <div className="detail-comment">
        <div className="username-date">
          <p>{comment.userName}</p>
          <span>{comment.date}</span>
          <button
            className="delete-btn"
            onClick={() => dispatch(deleteComment(comment.id))}
          >
            Delete
          </button>
        </div>
        <div className="description">{comment.description}</div>
        {!showReply && (
          <button className="reply-btn" onClick={handleReplyBtn}>
            Reply
          </button>
        )}
        {showReply && (
          <form className="form-submit-reply">
            <input type="text" ref={inputReply} />
            <button onClick={handleShowReplyComponent} type="submit">
              Post
            </button>
            <button onClick={() => setShowReply(false)}>Close</button>
          </form>
        )}

        {showReplyComponent &&
          comment.reply &&
          comment.reply.map((dateReply) => {
            return <Reply description={dateReply.description} />;
          })}
      </div>
    </div>
  );
};

export default Comment;
