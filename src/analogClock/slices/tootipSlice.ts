import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TooltipState {
  position: {
    x: number;
    y: number;
  };
}

const initialState: TooltipState = {
  position: {
    x: 0,
    y: 0,
  },
};

const TooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
  reducers: {
    setTooltipPosition: (
      state: TooltipState,
      action: PayloadAction<TooltipState>,
    ) => {
      state.position.x = action.payload.position.x;
      state.position.y = action.payload.position.y;
    },
  },
});

const { reducer } = TooltipSlice;

export const { setTooltipPosition } = TooltipSlice.actions;

export default reducer;
