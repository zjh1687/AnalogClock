import React from 'react';
import { useTimeDispatch, useTimeSelector } from 'src/store/hook';
import { setHour, setMinute, setSecond } from 'src/store/reducer';
import ClockHand from './components/ClockHand';
import HourNumber from './components/HourNumber';

function AnalogClock() {
  const dispatch = useTimeDispatch();
  const { hour, second, minute } = useTimeSelector((state) => state);

  //현재 시간 상태 store 등록
  setInterval(() => {
    const time = new Date();
    dispatch(setHour(time.getHours()));
    dispatch(setMinute(time.getMinutes()));
    dispatch(setSecond(time.getSeconds()));
  }, 1000);

  const clockNumberArr = Array.from({ length: 12 }, (v, i) => i);

  return (
    <div className="clock-wrapper">
      <div className="clock-circle">
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
      </div>
    </div>
  );
}

export default AnalogClock;
