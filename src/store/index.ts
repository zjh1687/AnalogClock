import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type TimeDispatch = typeof store.dispatch;
export default store;
