import TimeSlice, { TimeCount } from 'src/feature/analogClock/slices/timeSlice';
import TooltipSlice, {
  TooltipState,
} from 'src/feature/analogClock/slices/tootipSlice';

export default {
  time: TimeSlice,
  tooltlp: TooltipSlice,
};

export interface RootState {
  app: TimeCount;
  tootlp: TooltipState;
}
