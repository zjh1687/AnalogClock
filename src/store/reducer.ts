import TimeSlice, { TimeCount } from 'src/analogClock/slices/timeSlice';
import TooltipSlice, { TooltipState } from 'src/analogClock/slices/tootipSlice';

export default {
  time: TimeSlice,
  tooltlp: TooltipSlice,
};

export interface RootState {
  app: TimeCount;
  tootlp: TooltipState;
}
