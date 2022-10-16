import React from 'react';
import BaseHand from 'src/components/BaseHand';
import { useAppSelector } from 'src/store/hook';
function ClockHand() {
  const { hour, second, minute } = useAppSelector((state) => state.time);

  return (
    <div>
      <BaseHand
        color="black"
        width="8px"
        height="20%"
        deg={hour * 30 + (minute * 6) / 12}
      />
      {/* 분침 */}
      <BaseHand color="black" width="8px" height="40%" deg={minute * 6} />
      {/* 초침 */}
      <BaseHand color="red" width="4px" height="35%" deg={second * 6} />
    </div>
  );
}

export default ClockHand;
