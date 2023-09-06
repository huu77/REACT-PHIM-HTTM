// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice'

const rootReducer = combineReducers({
//   user: userReducer, from slice  ex: userSlice.reducer=== userReducer
  // Add more reducers as needed
  tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
