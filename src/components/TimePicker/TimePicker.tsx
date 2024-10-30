import { useState } from 'react';

import { TimeInput, TimeLabel, TimeWrapper } from './TimePicker.style';

export const TimePicker = () => {
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');

  return (
    <TimeWrapper>
      <TimeInput type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      <TimeLabel>부터</TimeLabel>
      <TimeInput type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      <TimeLabel>까지 방문</TimeLabel>
    </TimeWrapper>
  );
};
