import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    // 직렬화 할 수 없는 Date 함수를 이용하기 위해 미들웨어 추가
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type TimeDispatch = typeof store.dispatch;
export default store;
