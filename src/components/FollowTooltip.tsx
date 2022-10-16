import React from 'react';

function FollowTooltip(props: {
  x: number;
  y: number;
  children: React.ReactNode;
}) {
  return (
    // 툴팁이 우상단에 위치할 수 있는 좌표값
    <div
      className="tooltip"
      style={{ left: `${props.x}px`, top: `${props.y - 30}px` }}
    >
      {props.children}
    </div>
  );
}

export default FollowTooltip;
