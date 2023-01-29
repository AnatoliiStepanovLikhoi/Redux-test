import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import {
  // getTasks,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};

// export const App = () => {
//   const dispatch = useDispatch();
//   // Отримуємо частини стану
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);
//   const { items } = useSelector(getTasks);

//   // Викликаємо операцію
//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);
//   // Рендерим розмітку в залежності від значень у стані

//   return (
//     <Layout>
//       <AppBar />

//       {isLoading && !error && <b>Request in progress...</b>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </Layout>
//   );
// };
