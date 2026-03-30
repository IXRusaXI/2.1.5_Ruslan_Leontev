import './style.scss';
import { PostCard } from '../PostCard/PostCard';

interface PostListProps {
  postList: []
}

export const TodoList = ({postList}: PostListProps) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список постов</h2>
        </div>
        <div className="task-container">
          {postList.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
    </>
  );
};
