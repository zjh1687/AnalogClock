import React from 'react';
function ClockHand(props: {
  color: 'black' | 'red';
  width: string;
  height: string;
  deg: number;
}) {
  return (
    <div
      className="clock-hand"
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        backgroundColor: `${props.color}`,
        transform: `translate(-50%, -70%) rotate(${props.deg}deg)`,
      }}
    />
  );
}

export default ClockHand;
