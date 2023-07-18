const Reply = ({ description }) => {
  return (
    <div className="reply">
      <div className="profile-pic"></div>
      <div className="detail-reply">
        <div className="username-date">
          <p>You</p>
          <span>{new Date().toJSON().slice(0, 10)}</span>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Reply;
