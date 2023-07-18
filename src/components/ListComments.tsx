import { useSelector } from "react-redux";
import Comment from "./Comment";
import { listCommentsType } from "../type/listComments";
import InfiniteScroll from "react-infinite-scroll-component";
import { pagination, toggleHasMore } from "../features/listComment";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
const ListComments = () => {
  const dispatch = useDispatch();
  const { comments, pageSize, hasMore } = useSelector(
    (state: listCommentsType) => state.listComments
  );

  const fetchMoreData = () => {
    if (pageSize >= comments.length) {
      dispatch(toggleHasMore());
    }
    setTimeout(() => {
      dispatch(pagination());
    }, 1000);
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={pageSize}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div className="lds-dual-ring"></div>}
      >
        {comments.slice(0, pageSize).map((comment) => {
          return <Comment comment={comment} />;
        })}
      </InfiniteScroll>
    </Container>
  );
};

export default ListComments;
