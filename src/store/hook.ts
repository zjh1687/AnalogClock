import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, TimeDispatch } from './index';

export const useAppDispatch = () => useDispatch<TimeDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
