// reducers.ts
import { AnyAction, CombinedState, Reducer, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice'
import userReducer from './slice/userSlice'
const rootReducer: Reducer<CombinedState<any>, AnyAction>  = combineReducers({
//   user: userReducer, from slice  ex: userSlice.reducer=== userReducer
  tasks: tasksReducer,
  user:userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
