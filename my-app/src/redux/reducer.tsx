// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
 

const rootReducer = combineReducers({
//   user: userReducer, from slice  ex: userSlice.reducer=== userReducer
  // Add more reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
