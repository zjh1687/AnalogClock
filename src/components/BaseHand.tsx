import React from 'react';
function BaseHand(props: {
  color: 'black' | 'red';
  width: string;
  height: string;
  deg: number;
}) {
  return (
    <div
      className="base-hand"
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        backgroundColor: `${props.color}`,
        transform: `translate(-50%, -70%) rotate(${props.deg}deg)`,
      }}
    ></div>
  );
}

export default BaseHand;
