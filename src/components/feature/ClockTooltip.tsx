import React from 'react';
import FollowTooltip from 'src/components/FollowTooltip';
import { useAppSelector } from 'src/store/hook';

function ClockTooltip(props: { open?: boolean }) {
  const { hour, minute, second } = useAppSelector((state) => state.time);
  const { x, y } = useAppSelector((state) => state.tooltlp.position);

  return (
    <FollowTooltip x={x} y={y} open={props.open}>
      현재시각:{`${hour}시 ${minute}분 ${second}초`}
    </FollowTooltip>
  );
}

export default ClockTooltip;
