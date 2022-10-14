import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimeCount {
  hour: number;
  minute: number;
  second: number;
}

const initialState: TimeCount = {
  hour: 0,
  minute: 0,
  second: 0,
};

const TimeSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTime: (state: TimeCount, action: PayloadAction<Date>) => {
      state.hour = action.payload.getHours();
      state.minute = action.payload.getMinutes();
      state.second = action.payload.getSeconds();
    },
    setMinute: (state: TimeCount, action: PayloadAction<number>) => {
      state.minute = action.payload;
    },
    setSecond: (state: TimeCount, action: PayloadAction<number>) => {
      state.second = action.payload;
    },
  },
});

const { reducer } = TimeSlice;

export const { setTime, setMinute, setSecond } = TimeSlice.actions;

export default reducer;
