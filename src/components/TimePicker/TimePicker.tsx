import { TimeInput, TimeLabel, TimeWrapper } from './TimePicker.style';

interface TimePickerProps {
  startTime: string;
  endTime: string;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
}

export const TimePicker = ({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
}: TimePickerProps) => {
  return (
    <TimeWrapper>
      <TimeInput
        type="time"
        value={startTime}
        onChange={(e) => onStartTimeChange(e.target.value)}
      />
      <TimeLabel>부터</TimeLabel>
      <TimeInput type="time" value={endTime} onChange={(e) => onEndTimeChange(e.target.value)} />
      <TimeLabel>까지 방문</TimeLabel>
    </TimeWrapper>
  );
};
