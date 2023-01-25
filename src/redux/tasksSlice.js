import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { tasksInitialState } from './reducer';
// import { nanoid } from 'nanoid';

//syncronyzed code

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       // const index = state.findIndex(task => task.id === action.payload);
//       // state.splice(index, 1);
//       return state.filter(task => task.id !== action.payload);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//         }
//       }
//     },
//   },
// });

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

// export const tasksReducer = tasksSlice.reducer;

//asyncronized code

import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const extraActions = [fetchTasks, addTask, deleteTask, toggleCompleted];

const getActions = type => extraActions.map(action => action[type]);

const fetchTasksSuccessReducer = (state, action) => {
  state.items = action.payload;
};
const addTaskSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteTaskSuccessReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const toggleCompletedSuccessReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchTasks.fulfilled, fetchTasksSuccessReducer)
      .addCase(addTask.fulfilled, addTaskSuccessReducer)
      .addCase(deleteTask.fulfilled, deleteTaskSuccessReducer)
      .addCase(toggleCompleted.fulfilled, toggleCompletedSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),

  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = true;
  //     state.error = action.payload;
  //   },
  // },

  // extraReducers: {
  //   [fetchTasks.pending]: handlePending,
  //   [fetchTasks.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchTasks.rejected]: handleRejected,
  //   [addTask.pending]: handlePending,
  //   [addTask.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addTask.rejected]: handleRejected,
  //   [deleteTask.pending]: handlePending,
  //   [deleteTask.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteTask.rejected]: handleRejected,
  //   [toggleCompleted.pending]: handlePending,
  //   [toggleCompleted.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1, action.payload);
  //   },
  //   [toggleCompleted.rejected]: handleRejected,
  // },
});

export const tasksReducer = tasksSlice.reducer;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
