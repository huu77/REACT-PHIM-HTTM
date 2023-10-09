// reducers.ts
import { AnyAction, CombinedState, Reducer, combineReducers } from '@reduxjs/toolkit';
 
import userReducer from './slice/userSlice'
import moviesReducer from './slice/moviesSlice';
import genresReducer from './slice/genresSlice'
const rootReducer: Reducer<CombinedState<any>, AnyAction>  = combineReducers({
//   user: userReducer, from slice  ex: userSlice.reducer=== userReducer
 
  user:userReducer,
  movies:moviesReducer,
  genres:genresReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
