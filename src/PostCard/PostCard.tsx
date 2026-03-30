import classNames from 'classnames';
import './style.scss';

export const PostCard = ({
  post: { id, title, body },
}) => {
  return (
    <div className="task-card">
      <span className="task-card__title">{title}</span>
      <span>{body}</span>
    </div>
  );
};
