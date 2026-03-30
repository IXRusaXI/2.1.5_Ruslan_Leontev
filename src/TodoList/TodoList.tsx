import { PostCard } from '../PostCard/PostCard';

interface PostListProps {
  postList: []
}

export const TodoList = ({postList}: PostListProps) => {
  return (
    <>
      <h2>Список постов</h2>
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};
