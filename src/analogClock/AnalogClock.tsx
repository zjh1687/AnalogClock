import React, { useEffect, useRef, useState } from 'react';
import ClockTooltip from 'src/components/feature/ClockTooltip';
import { useAppDispatch } from 'src/store/hook';
import ClockHand from './components/ClockHand';
import HourNumber from './components/HourNumber';

import { setTime } from './slices/timeSlice';
import { setTooltipPosition } from './slices/tootipSlice';
import { throttle } from 'lodash';

function AnalogClock() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  // 툴팁 상태 관리
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  // 실시간 마우스 좌표 없데이트
  // Thrttle 설정을 통해 일정 시간후 함수가 동작하도록 설정
  const handleTooltip = throttle((e: MouseEvent) => {
    dispatch(setTooltipPosition({ position: { x: e.clientX, y: e.clientY } }));
  }, 10);

  //현재 시간 상태 store 등록
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      dispatch(setTime(time));
    }, 1000);
    // CleanUp 작업
    return () => clearInterval(interval);
  }, []);

  // mouse 움직임에 반응하는 이벤트 리스너 등록
  useEffect(() => {
    rootRef.current?.addEventListener('mousemove', (e) => {
      handleTooltip(e);
    });
    // CleanUp 작업
    return () => {
      rootRef.current?.removeEventListener('mousemove', (e) => {
        handleTooltip(e);
      });
    };
  }, []);
  //12시 까지 표시하기위한 arr 생성
  const clockNumberArr = Array.from({ length: 12 }, (v, i) => i);

  return (
    <div className="clock-wrapper">
      <div
        className="clock-circle"
        ref={rootRef}
        onMouseEnter={() => {
          setTooltipOpen(true);
        }}
        onMouseLeave={() => {
          setTooltipOpen(false);
        }}
      >
        {clockNumberArr.map((i) => {
          return <HourNumber key={`hour+${i}`} number={i + 1} />;
        })}
        {/* 시계침 컴포넌트 */}
        <ClockHand />
        {/* 움직이는 툴팁 컴포넌트 */}
        <ClockTooltip open={tooltipOpen} />
      </div>
    </div>
  );
}

export default AnalogClock;
