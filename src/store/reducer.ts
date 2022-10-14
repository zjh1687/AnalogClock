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
  },
});

const { reducer } = TimeSlice;

export const { setTime } = TimeSlice.actions;

export default reducer;
