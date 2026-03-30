import classNames from 'classnames';
import './style.scss';

export const PostCard = ({
  task: { id, title, priority, status, progress },
}) => {
  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Задача</span>
        <span className="task">{title}</span>
      </div>
    </div>
  );
};
