import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2';

import counterReducer from '../features/counter/counterSlice';
import authReducer from '../reducers/AuthSlice';
import CustomerProfileSlice from '../reducers/CustomerProfileSlice';
import MeterSlice from '../reducers/MeterSlice';
import NetworkSlice from '../reducers/NetworkSlice';
import UserSlice from '../reducers/UserSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers({
  count: counterReducer,
  authentication: authReducer,
  CustomerSlice: CustomerProfileSlice,
  meterSlice : MeterSlice,
  networkSlice : NetworkSlice,
  userSlice : UserSlice
  
});

const _persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});

export const persistor = persistStore(store)