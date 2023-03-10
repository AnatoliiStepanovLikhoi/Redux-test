// import { legacy_createStore as createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

import {
  configureStore,
  // getDefaultMiddleware
} from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import { filtersReducer } from './filterSlice';
import { tasksReducer } from './tasksSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from

// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: 'all',
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
