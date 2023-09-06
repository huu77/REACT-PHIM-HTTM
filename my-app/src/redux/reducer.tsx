// reducers.ts
import { AnyAction, CombinedState, Reducer, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice'

const rootReducer: Reducer<CombinedState<any>, AnyAction>  = combineReducers({
//   user: userReducer, from slice  ex: userSlice.reducer=== userReducer
  tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
