import React from 'react';

function HourNumber(props: { number: number }) {
  return (
    <div
      className="hour-number"
      style={{ transform: `rotate(${props.number * 30}deg)` }}
    >
      <p style={{ transform: `rotate(-${props.number * 30}deg)` }}>
        {props.number}
      </p>
    </div>
  );
}

export default HourNumber;
