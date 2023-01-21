import { createSlice } from '@reduxjs/toolkit';
import { tasksInitialState } from './reducer';
import { nanoid } from 'nanoid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      // const index = state.findIndex(task => task.id === action.payload);
      // state.splice(index, 1);
      return state.filter(task => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
