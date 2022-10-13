import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, TimeDispatch } from './index';

export const useTimeDispatch = () => useDispatch<TimeDispatch>();

export const useTimeSelector: TypedUseSelectorHook<RootState> = useSelector;
