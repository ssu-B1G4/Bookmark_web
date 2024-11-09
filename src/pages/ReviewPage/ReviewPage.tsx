import { useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import back from '@/assets/BottomNav/backIcon.svg';
import { CompleteBtn } from '@/components/CompleteBtn/CompleteBtn';
import { LargeTextArea, SmallInput } from '@/components/CustomInput/CustomInput';
import { ImageUpload } from '@/components/ImageUpload/ImageUpload';
import { MultiSelectBtnGroup } from '@/components/ReplyBtn/BtnGroup/MultiSelectBtnGroup';
import { SingleSelectBtnGroup } from '@/components/ReplyBtn/BtnGroup/SingleSelectBtnGroup';
import { TimePicker } from '@/components/TimePicker/TimePicker';
import Slider from '@/components/TrafficSlider/TrafficSlider';
import { ReviewFormData } from '@/types/ReviewPage/ReviewFormData';

import {
  BackButton,
  CenteredContainer,
  Header,
  StyledBtnGap,
  StyledContentText,
  StyledTitleText,
  StyledWrapper,
  Title,
} from './ReviewPage.style';

export const ReviewPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/place');
  };

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<ReviewFormData>({
    mode: 'onChange',
    defaultValues: {
      visitPlace: '',
      bookTitle: '',
      author: '',
      reviewText: '',
      images: [],
      startTime: '00:00',
      endTime: '00:00',
      traffic: 50,
      spaceSize: '',
      wifi: '',
      socket: '',
      noise: '',
      atmosphere: [],
    },
  });

  const images = watch('images');

  const handleImagesChange = (newFiles: File[], onChange: (value: File[]) => void) => {
    imagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
    onChange(newFiles);
  };

  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [imagePreviews]);

  const onSubmit = async (data: ReviewFormData) => {
    const formData = new FormData();

    data.images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });

    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'images') {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value.toString());
      }
    });
  };

  return (
    <StyledWrapper>
      <Header>
        <BackButton onClick={handleBackClick}>
          <img src={back} alt="뒤로가기" />
        </BackButton>
        <Title>리뷰 등록</Title>
      </Header>

      <StyledTitleText>방문 장소</StyledTitleText>
      <CenteredContainer>
        <Controller
          name="visitPlace"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <SmallInput placeholder="방문 장소를 입력하세요" {...field} />}
        />
      </CenteredContainer>

      <StyledTitleText>사진으로 후기를 남겨보세요 ({images?.length || 0}/3)</StyledTitleText>
      <Controller
        name="images"
        control={control}
        render={({ field: { onChange, value } }) => (
          <ImageUpload
            images={value}
            imagePreviews={imagePreviews}
            onImagesChange={(newFiles) => handleImagesChange(newFiles, onChange)}
            maxImages={3}
          />
        )}
      />

      <StyledTitleText>독서하기 좋은 공간이었나요?</StyledTitleText>
      <StyledContentText>방문 시간</StyledContentText>
      <Controller
        name="startTime"
        control={control}
        rules={{ required: true }}
        render={({ field: { value: startTime, onChange: setStartTime } }) => (
          <Controller
            name="endTime"
            control={control}
            rules={{ required: true }}
            render={({ field: { value: endTime, onChange: setEndTime } }) => (
              <TimePicker
                startTime={startTime}
                endTime={endTime}
                onStartTimeChange={setStartTime}
                onEndTimeChange={setEndTime}
              />
            )}
          />
        )}
      />

      <StyledContentText>혼잡도</StyledContentText>
      <Controller
        name="traffic"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Slider progress={value} onProgressChange={onChange} />
        )}
      />

      <StyledContentText>공간 크기</StyledContentText>
      <StyledBtnGap>
        <Controller
          name="spaceSize"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['부족', '보통', '넉넉']}
              textColor="#198155"
              bgColor="#ECFCE5"
              borderRadius={48}
              fontSize={1.6}
              fontWeight="400"
              onSelectionChange={(selected) => onChange(selected)}
            />
          )}
        />
      </StyledBtnGap>

      <StyledContentText>와이파이</StyledContentText>
      <StyledBtnGap>
        <Controller
          name="wifi"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['있어요', '없어요']}
              textColor="#198155"
              bgColor="#ECFCE5"
              borderRadius={48}
              fontSize={1.6}
              fontWeight="400"
              onSelectionChange={(selected) => onChange(selected)}
            />
          )}
        />
      </StyledBtnGap>

      <StyledContentText>콘센트</StyledContentText>
      <StyledBtnGap>
        <Controller
          name="socket"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['부족', '보통', '넉넉']}
              textColor="#198155"
              bgColor="#ECFCE5"
              borderRadius={48}
              fontSize={1.6}
              fontWeight="400"
              onSelectionChange={(selected) => onChange(selected)}
            />
          )}
        />
      </StyledBtnGap>

      <StyledContentText>소음</StyledContentText>
      <StyledBtnGap>
        <Controller
          name="noise"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['조용함', '보통', '활발함']}
              textColor="#198155"
              bgColor="#ECFCE5"
              borderRadius={48}
              fontSize={1.6}
              fontWeight="400"
              onSelectionChange={(selected) => onChange(selected)}
            />
          )}
        />
      </StyledBtnGap>

      <StyledContentText>분위기</StyledContentText>
      <StyledBtnGap>
        <Controller
          name="atmosphere"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
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
              textColor="#198155"
              bgColor="#ECFCE5"
              borderRadius={48}
              fontSize={1.6}
              fontWeight="400"
              onSelectionChange={(selected) => onChange(selected)}
            />
          )}
        />
      </StyledBtnGap>

      <StyledTitleText>해당 공간에서 함께 한 책이 있어요?</StyledTitleText>
      <StyledContentText>공간 보유 도서</StyledContentText>
      <CenteredContainer>
        <Controller
          name="bookTitle"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SmallInput
              placeholder="해당 공간이 보유하고 있던 책 제목을 입력해주세요."
              {...field}
            />
          )}
        />
      </CenteredContainer>

      <StyledContentText>작가</StyledContentText>
      <CenteredContainer>
        <Controller
          name="author"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SmallInput placeholder="해당 책의 작가를 기재해주세요." {...field} />
          )}
        />
      </CenteredContainer>

      <StyledTitleText>해당 공간에 대한 후기를 남겨주세요!</StyledTitleText>
      <CenteredContainer>
        <Controller
          name="reviewText"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <LargeTextArea
              placeholder="책을 읽기에 적합한 장소였나요? &#10;해당 공간에서의 경험을 작성해주세요!"
              {...field}
            />
          )}
        />
      </CenteredContainer>

      <CenteredContainer>
        <CompleteBtn onClick={handleSubmit(onSubmit)} disabled={!isValid}>
          작성 완료
        </CompleteBtn>
      </CenteredContainer>
    </StyledWrapper>
  );
};
