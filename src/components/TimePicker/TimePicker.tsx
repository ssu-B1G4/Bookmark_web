// import { TimeInput, TimeLabel, TimeWrapper } from './TimePicker.style';

// interface TimePickerProps {
//   startTime: string;
//   endTime: string;
//   onStartTimeChange: (time: string) => void;
//   onEndTimeChange: (time: string) => void;
// }

// export const TimePicker = ({
//   startTime,
//   endTime,
//   onStartTimeChange,
//   onEndTimeChange,
// }: TimePickerProps) => {
//   return (
//     <TimeWrapper>
//       <TimeInput
//         type="time"
//         value={startTime}
//         onChange={(e) => onStartTimeChange(e.target.value)}
//       />
//       <TimeLabel>부터</TimeLabel>
//       <TimeInput type="time" value={endTime} onChange={(e) => onEndTimeChange(e.target.value)} />
//       <TimeLabel>까지 방문</TimeLabel>
//     </TimeWrapper>
//   );
// };

import { useState } from 'react';

import {
  Divider,
  DropdownList,
  DropdownOption,
  TimeDisplay,
  TimeDropdown,
  TimePickerContainer,
  TimeSelectGroup,
  TimeSeparator,
  TimeWrapper,
} from './TimePicker.style';

interface TimePickerProps {
  startTime: string;
  endTime: string;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
}) => {
  const [startHourOpen, setStartHourOpen] = useState(false);
  const [startMinuteOpen, setStartMinuteOpen] = useState(false);
  const [endHourOpen, setEndHourOpen] = useState(false);
  const [endMinuteOpen, setEndMinuteOpen] = useState(false);

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));

  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

  const getHourFromTime = (time: string) => time.split(':')[0];
  const getMinuteFromTime = (time: string) => time.split(':')[1];

  const handleTimeChange = (type: 'start' | 'end', part: 'hour' | 'minute', value: string) => {
    const currentTime = type === 'start' ? startTime : endTime;
    const [currentHour, currentMinute] = currentTime.split(':');

    const newTime = part === 'hour' ? `${value}:${currentMinute}` : `${currentHour}:${value}`;

    if (type === 'start') {
      onStartTimeChange(newTime);
    } else {
      onEndTimeChange(newTime);
    }
  };

  return (
    <TimePickerContainer>
      <TimeWrapper>
        <TimeSelectGroup>
          <TimeDropdown $isOpen={startHourOpen}>
            <TimeDisplay onClick={() => setStartHourOpen(!startHourOpen)}>
              {getHourFromTime(startTime)}
            </TimeDisplay>
            <DropdownList $isOpen={startHourOpen}>
              {hours.map((hour) => (
                <DropdownOption
                  key={hour}
                  onClick={() => {
                    handleTimeChange('start', 'hour', hour);
                    setStartHourOpen(false);
                  }}
                >
                  {hour}
                </DropdownOption>
              ))}
            </DropdownList>
          </TimeDropdown>

          <TimeSeparator>:</TimeSeparator>

          <TimeDropdown $isOpen={startMinuteOpen}>
            <TimeDisplay onClick={() => setStartMinuteOpen(!startMinuteOpen)}>
              {getMinuteFromTime(startTime)}
            </TimeDisplay>
            <DropdownList $isOpen={startMinuteOpen}>
              {minutes.map((minute) => (
                <DropdownOption
                  key={minute}
                  onClick={() => {
                    handleTimeChange('start', 'minute', minute);
                    setStartMinuteOpen(false);
                  }}
                >
                  {minute}
                </DropdownOption>
              ))}
            </DropdownList>
          </TimeDropdown>
        </TimeSelectGroup>
      </TimeWrapper>

      <Divider>~</Divider>

      <TimeWrapper>
        <TimeSelectGroup>
          <TimeDropdown $isOpen={endHourOpen}>
            <TimeDisplay onClick={() => setEndHourOpen(!endHourOpen)}>
              {getHourFromTime(endTime)}
            </TimeDisplay>
            <DropdownList $isOpen={endHourOpen}>
              {hours.map((hour) => (
                <DropdownOption
                  key={hour}
                  onClick={() => {
                    handleTimeChange('end', 'hour', hour);
                    setEndHourOpen(false);
                  }}
                >
                  {hour}
                </DropdownOption>
              ))}
            </DropdownList>
          </TimeDropdown>

          <TimeSeparator>:</TimeSeparator>

          <TimeDropdown $isOpen={endMinuteOpen}>
            <TimeDisplay onClick={() => setEndMinuteOpen(!endMinuteOpen)}>
              {getMinuteFromTime(endTime)}
            </TimeDisplay>
            <DropdownList $isOpen={endMinuteOpen}>
              {minutes.map((minute) => (
                <DropdownOption
                  key={minute}
                  onClick={() => {
                    handleTimeChange('end', 'minute', minute);
                    setEndMinuteOpen(false);
                  }}
                >
                  {minute}
                </DropdownOption>
              ))}
            </DropdownList>
          </TimeDropdown>
        </TimeSelectGroup>
      </TimeWrapper>
    </TimePickerContainer>
  );
};
