import { useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { CompleteBtn } from '@/components/CompleteBtn/CompleteBtn';
import { SingleSelectBtnGroup } from '@/components/ReplyBtn/BtnGroup/SingleSelectBtnGroup';
import { FILTER_MESSAGES } from '@/constant/HomeMessage';
import { Filter } from '@/types/Filter';

import {
  Container,
  ScrollWrraper,
  OptionWrraper,
  WorkTimeWrraper,
  TitleText,
  DescriptionText,
  LabelText,
  TimeDropdown,
  TimeDisplay,
  DropdownList,
  DropdownOption,
} from './FilterPage.style';
import { FilterPageProps } from './FilterPageProps';

export const FilterPage = ({ onSearch, defaultValues }: FilterPageProps) => {
  const [dayDropdownOpen, setDayDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const isButtonEnabled = (!isDaySelected && !isTimeSelected) || (isDaySelected && isTimeSelected);
  const { control, watch, setValue, handleSubmit, reset } = useForm<Filter>({
    defaultValues,
  });

  const dayOptions = ['-', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
  const timeOptions = [
    '-',
    ...Array.from({ length: 24 }, (_, index) => `${index.toString().padStart(2, '0')}:00`),
  ];

  const watchDay = watch('day');
  const watchTime = watch('time');

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    setIsDaySelected(Boolean(watchDay));
  }, [watchDay]);

  useEffect(() => {
    setIsTimeSelected(Boolean(watchTime));
  }, [watchTime]);

  const onSubmit = async (data: Filter) => {
    if (isButtonEnabled) {
      onSearch(data);
    }
  };

  return (
    <Container>
      <ScrollWrraper>
        <OptionWrraper>
          <TitleText>{FILTER_MESSAGES.BUSINESSHOURS_LABEL}</TitleText>
          <WorkTimeWrraper>
            <LabelText>{FILTER_MESSAGES.DAY_LABEL}</LabelText>
            <Controller
              name="day"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TimeDropdown>
                  <TimeDisplay
                    $disabled={true}
                    onClick={() => setDayDropdownOpen(!dayDropdownOpen)}
                  >
                    {value || '-'}
                  </TimeDisplay>
                  <DropdownList $isOpen={dayDropdownOpen}>
                    {dayOptions.map((day) => (
                      <DropdownOption
                        key={day}
                        onClick={() => {
                          onChange(day === '-' ? undefined : day);
                          setDayDropdownOpen(false);
                          if (day === '-') {
                            setValue('time', undefined);
                          }
                        }}
                      >
                        {day}
                      </DropdownOption>
                    ))}
                  </DropdownList>
                </TimeDropdown>
              )}
            />
            <LabelText>{FILTER_MESSAGES.TIME_LABEL}</LabelText>
            <Controller
              name="time"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TimeDropdown>
                  <TimeDisplay
                    $disabled={Boolean(watchDay)}
                    onClick={() => {
                      if (Boolean(watchDay)) {
                        setTimeDropdownOpen(!timeDropdownOpen);
                      }
                    }}
                  >
                    {value || '-'}
                  </TimeDisplay>
                  <DropdownList $isOpen={timeDropdownOpen}>
                    {timeOptions.map((time) => (
                      <DropdownOption
                        key={time}
                        onClick={() => {
                          onChange(time === '-' ? undefined : time);
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
          <DescriptionText>{FILTER_MESSAGES.BUSINESSHOURS_DESCRIPTION}</DescriptionText>
        </OptionWrraper>

        <OptionWrraper>
          <TitleText>{FILTER_MESSAGES.SIZE_LABEL}</TitleText>
          <Controller
            name="size"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SingleSelectBtnGroup
                options={['부족', '보통', '넉넉']}
                selectedValue={value}
                deselectable={true}
                borderRadius={23}
                fontSize={1.2}
                onSelectionChange={onChange}
              />
            )}
          />
        </OptionWrraper>

        <OptionWrraper>
          <TitleText>{FILTER_MESSAGES.WIFI_LABEL}</TitleText>
          <Controller
            name="wifi"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SingleSelectBtnGroup
                options={['있어요', '없어요']}
                selectedValue={value}
                deselectable={true}
                borderRadius={23}
                fontSize={1.2}
                onSelectionChange={onChange}
              />
            )}
          />
        </OptionWrraper>

        <OptionWrraper>
          <TitleText>{FILTER_MESSAGES.OUTLET_LABEL}</TitleText>
          <Controller
            name="outlet"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SingleSelectBtnGroup
                options={['부족', '보통', '넉넉']}
                selectedValue={value}
                deselectable={true}
                borderRadius={23}
                fontSize={1.2}
                onSelectionChange={onChange}
              />
            )}
          />
        </OptionWrraper>

        <OptionWrraper>
          <TitleText>{FILTER_MESSAGES.MOOD_LABEL}</TitleText>
          <Controller
            name="mood"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SingleSelectBtnGroup
                options={[
                  '🎆 편안한',
                  '🎉 신나는',
                  '🌌 차분한',
                  '✨ 즐거운',
                  '🪑 아늑한',
                  '🍀 재미있는',
                ]}
                selectedValue={value}
                deselectable={true}
                borderRadius={23}
                fontSize={1.2}
                onSelectionChange={onChange}
              />
            )}
          />
        </OptionWrraper>

        <OptionWrraper>
          <TitleText>{FILTER_MESSAGES.NOISE_LABEL}</TitleText>
          <Controller
            name="noise"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SingleSelectBtnGroup
                options={['조용함', '보통', '생기있음']}
                selectedValue={value}
                deselectable={true}
                borderRadius={23}
                fontSize={1.2}
                onSelectionChange={onChange}
              />
            )}
          />
        </OptionWrraper>
      </ScrollWrraper>

      <CompleteBtn onClick={handleSubmit(onSubmit)} disabled={!isButtonEnabled}>
        {FILTER_MESSAGES.BUTTON_LABEL}
      </CompleteBtn>
    </Container>
  );
};
