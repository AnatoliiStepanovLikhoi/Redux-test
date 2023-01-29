import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectVisibleTasks } from 'redux/selectors';
// import { statusFilters } from 'redux/constants';
import css from './TaskList.module.css';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  // console.log(tasks);
  // const statusFilter = useSelector(selectStatusFilter);
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
