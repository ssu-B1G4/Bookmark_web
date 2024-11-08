import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { CompleteBtn } from '@/components/CompleteBtn/CompleteBtn';
import { MultiSelectBtnGroup } from '@/components/ReplyBtn/BtnGroup/MultiSelectBtnGroup';
import { SingleSelectBtnGroup } from '@/components/ReplyBtn/BtnGroup/SingleSelectBtnGroup';

import {
  Container,
  OptionWrraper,
  WorkTimeWrraper,
  TitleText,
  LabelText,
  TimeDropdown,
  TimeDisplay,
  DropdownList,
  DropdownOption,
} from './FilterPage.style';

interface FilterFormData {
  operatingHours: {
    day: string;
    time: string;
  };
  spaceSize: string;
  wifi: string;
  socket: string;
  noise: string;
  atmosphere: string[];
}

export const FilterPage = () => {
  const [dayDropdownOpen, setDayDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const { control, handleSubmit } = useForm<FilterFormData>({
    defaultValues: {
      operatingHours: {
        day: '',
        time: '',
      },
      spaceSize: '',
      wifi: '',
      socket: '',
      noise: '',
      atmosphere: [],
    },
  });

  const dayOptions = ['-', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
  const timeOptions = [
    '-',
    ...Array.from({ length: 24 }, (_, index) => `${index.toString().padStart(2, '0')}:00`),
  ];

  const onSubmit = (data: FilterFormData) => {
    console.log('Selected Filters:', data);
  };

  return (
    <Container>
      <OptionWrraper>
        <TitleText>영업시간</TitleText>
        <WorkTimeWrraper>
          <LabelText>요일</LabelText>
          <Controller
            name="operatingHours.day"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TimeDropdown $isOpen={dayDropdownOpen}>
                <TimeDisplay onClick={() => setDayDropdownOpen(!dayDropdownOpen)}>
                  {value || '-'}
                </TimeDisplay>
                <DropdownList $isOpen={dayDropdownOpen}>
                  {dayOptions.map((day) => (
                    <DropdownOption
                      key={day}
                      onClick={() => {
                        onChange(day === '-' ? '' : day);
                        setDayDropdownOpen(false);
                      }}
                    >
                      {day}
                    </DropdownOption>
                  ))}
                </DropdownList>
              </TimeDropdown>
            )}
          />
          <LabelText>시간</LabelText>
          <Controller
            name="operatingHours.time"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TimeDropdown $isOpen={timeDropdownOpen}>
                <TimeDisplay onClick={() => setTimeDropdownOpen(!timeDropdownOpen)}>
                  {value || '-'}
                </TimeDisplay>
                <DropdownList $isOpen={timeDropdownOpen}>
                  {timeOptions.map((time) => (
                    <DropdownOption
                      key={time}
                      onClick={() => {
                        onChange(time === '-' ? '' : time);
                        setTimeDropdownOpen(false);
                      }}
                    >
                      {time}
                    </DropdownOption>
                  ))}
                </DropdownList>
              </TimeDropdown>
            )}
          />
        </WorkTimeWrraper>
      </OptionWrraper>

      <OptionWrraper>
        <TitleText>공간 크기</TitleText>
        <Controller
          name="spaceSize"
          control={control}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['부족', '보통', '넉넉']}
              deselectable={true}
              borderRadius={23}
              fontSize={1.2}
              onSelectionChange={onChange}
            />
          )}
        />
      </OptionWrraper>

      <OptionWrraper>
        <TitleText>와이파이</TitleText>
        <Controller
          name="wifi"
          control={control}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['있어요', '없어요']}
              deselectable={true}
              borderRadius={23}
              fontSize={1.2}
              onSelectionChange={onChange}
            />
          )}
        />
      </OptionWrraper>

      <OptionWrraper>
        <TitleText>콘센트</TitleText>
        <Controller
          name="socket"
          control={control}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['부족', '보통', '넉넉']}
              deselectable={true}
              borderRadius={23}
              fontSize={1.2}
              onSelectionChange={onChange}
            />
          )}
        />
      </OptionWrraper>

      <OptionWrraper>
        <TitleText>분위기</TitleText>
        <Controller
          name="atmosphere"
          control={control}
          render={({ field: { onChange } }) => (
            <MultiSelectBtnGroup
              options={[
                '🎆 편안한',
                '🎉 신나는',
                '🌌 차분한',
                '✨ 즐거운',
                '🪑 아늑한',
                '🍀 재미있는',
              ]}
              borderRadius={23}
              fontSize={1.2}
              onSelectionChange={onChange}
            />
          )}
        />
      </OptionWrraper>

      <OptionWrraper>
        <TitleText>소음</TitleText>
        <Controller
          name="noise"
          control={control}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['조용함', '보통', '활발함']}
              deselectable={true}
              borderRadius={23}
              fontSize={1.2}
              onSelectionChange={onChange}
            />
          )}
        />
      </OptionWrraper>

      <CompleteBtn onClick={handleSubmit(onSubmit)}>검색 하기</CompleteBtn>
    </Container>
  );
};
