import React, { useState } from 'react';
import ClockHand from './components/ClockHand';
import HourNumber from './components/HourNumber';

function AnalogClock() {
  const [hourDeg, setHoutDeg] = useState<number>(0);
  const [minuteDeg, setMinuteDeg] = useState<number>(0);
  const [secondDeg, setSecondDegg] = useState<number>(0);
  const clockNumberArr = Array.from({ length: 12 }, (v, i) => i);

  setInterval(() => {
    const time = new Date();
    setHoutDeg(time.getHours() * 30);
    setMinuteDeg(360 - time.getMinutes());
    setSecondDegg(time.getSeconds() * 6);
  }, 1000);

  return (
    <div className="clock-wrapper">
      <div className="clock-circle">
        <div className="hour">
          {clockNumberArr.map((i) => {
            return <HourNumber key={`hour+${i}`} number={i + 1} />;
          })}
        </div>
        {/* 시침 */}
        <ClockHand color="black" width="8px" height="20%" deg={hourDeg} />
        {/* 분침 */}
        <ClockHand color="black" width="8px" height="40%" deg={minuteDeg} />
        {/* 초침 */}
        <ClockHand color="red" width="4px" height="35%" deg={secondDeg} />
      </div>
    </div>
  );
}

export default AnalogClock;
