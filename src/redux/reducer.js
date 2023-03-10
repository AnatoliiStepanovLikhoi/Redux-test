// import { statusFilters } from './constants';
// // import { combineReducers } from 'redux';
// import {
//   // addTask,
//   // deleteTask,
//   // toggleCompleted,
//   setStatusFilter,
// } from './actions';
// import { createReducer } from '@reduxjs/toolkit';

// export const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

//without Immer

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteTask]: (state, action) => {
//     return state.filter(task => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     return state.map(task => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return { ...task, completed: !task.completed };
//     });
//   },
// });

//with Immer

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     // const index = state.findIndex(task => task.id === action.payload);
//     // state.splice(index, 1);
//     return state.filter(task => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filterReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filter/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const filterReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     state.status = action.payload;
//     // return {
//     //   ...state,
//     //   status: action.payload,
//     // };
//   },
// });

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filterReducer,
// });

///////////////////////

// export const rootReducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     filters: filterReducer(state.filters, action),
//   };
// };

// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };

//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return { ...task, completed: !task.completed };
//         }),
//       };

//     case 'filter/setStatusFilter':
//       return {
//         ...state,
//         filter: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
