import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, TimeDispatch } from '.';

export const useAppDispatch = () => useDispatch<TimeDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
