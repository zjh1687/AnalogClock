import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import ClockHand from './components/ClockHand';
import HourNumber from './components/HourNumber';
import Tooltip from './components/Tooltip';
import { setTime } from './slices/timeSlice';
import { setTooltipPosition } from './slices/tootipSlice';

function AnalogClock() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { hour, second, minute } = useAppSelector((state) => state.time);

  const handleTooltip = (e: MouseEvent) => {
    dispatch(setTooltipPosition({ position: { x: e.clientX, y: e.clientY } }));
  };

  //현재 시간 상태 store 등록
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      dispatch(setTime(time));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    rootRef.current?.addEventListener('mousemove', (e) => {
      handleTooltip(e);
    });
    return () => {
      rootRef.current?.removeEventListener('mousemove', (e) => {
        handleTooltip(e);
      });
    };
  }, []);

  const clockNumberArr = Array.from({ length: 12 }, (v, i) => i);

  return (
    <div className="clock-wrapper">
      <div className="clock-circle" ref={rootRef}>
        {clockNumberArr.map((i) => {
          return <HourNumber key={`hour+${i}`} number={i + 1} />;
        })}

        {/* 시침 */}
        <ClockHand
          color="black"
          width="8px"
          height="20%"
          deg={hour * 30 + (minute * 6) / 12}
        />
        {/* 분침 */}
        <ClockHand color="black" width="8px" height="40%" deg={minute * 6} />
        {/* 초침 */}
        <ClockHand color="red" width="4px" height="35%" deg={second * 6} />
        <Tooltip />
      </div>
    </div>
  );
}

export default AnalogClock;
