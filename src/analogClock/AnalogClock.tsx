import React, { useEffect, useRef } from 'react';
import { useTimeDispatch, useTimeSelector } from 'src/store/hook';
import { setTime } from 'src/store/reducer';
import ClockHand from './components/ClockHand';
import HourNumber from './components/HourNumber';

function AnalogClock() {
  const rootRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dispatch = useTimeDispatch();
  const { hour, second, minute } = useTimeSelector((state) => state);

  const handleTooltip = (e: MouseEvent) => {
    tooltipRef.current!.style.left = e.clientX + 'px';
    tooltipRef.current!.style.top = e.clientY - 30 + 'px';
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
        <div className="hour">
          {clockNumberArr.map((i) => {
            return <HourNumber key={`hour+${i}`} number={i + 1} />;
          })}
        </div>
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
        <div className="tooltip" ref={tooltipRef}>
          현재시각:{`${hour}시 ${minute}분 ${second}초`}
        </div>
      </div>
    </div>
  );
}

export default AnalogClock;
