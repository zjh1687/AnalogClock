import React from 'react';
import { useAppSelector } from 'src/store/hook';

function Tooltip() {
  const { hour, minute, second } = useAppSelector((state) => state.time);
  const { x, y } = useAppSelector((state) => state.tooltlp.position);

  return (
    <div className="tooltip" style={{ left: `${x}px`, top: `${y - 30}px` }}>
      현재시각:{`${hour}시 ${minute}분 ${second}초`}
    </div>
  );
}

export default Tooltip;
