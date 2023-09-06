// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Import your rootReducer here
import { useDispatch } from 'react-redux';
//redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['tasks'] // các slice mà u muốn nó lưu lại trong localStorage and blacklist là ngược lại, ko có dùng thì nó lưu hết
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  //store
const store = configureStore({
  reducer: persistedReducer,

});

//redux persist
export const persistor = persistStore(store)
// of redux toolkit 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export default store;
