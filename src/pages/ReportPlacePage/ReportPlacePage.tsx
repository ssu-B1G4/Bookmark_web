import { useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { postReportPlace } from '@/apis/postReportPlace';
import back from '@/assets/BottomNav/backIcon.svg';
import { AddressSearch } from '@/components/AddressSearch/AddressSearch';
import { CompleteBtn } from '@/components/CompleteBtn/CompleteBtn';
import { LargeTextArea, SmallInput } from '@/components/CustomInput/CustomInput';
import { ImageUpload } from '@/components/ImageUpload/ImageUpload';
import { MultiSelectBtnGroup } from '@/components/ReplyBtn/BtnGroup/MultiSelectBtnGroup';
import { SingleSelectBtnGroup } from '@/components/ReplyBtn/BtnGroup/SingleSelectBtnGroup';
import { ReportFormData } from '@/types/ReviewPage/ReviewFormData';
import { handleError } from '@/utils/error';

import { BookTagsContainer, InputWithButtonContainer } from '../ReviewPage/ReviewPage.style';

import {
  AddTagButton,
  BackButton,
  BookTag,
  CenteredContainer,
  Header,
  StyledBtnGap,
  StyledContentText,
  StyledTitleText,
  StyledWrapper,
  Title,
} from './ReportPlacePage.style';

export const ReportPlacePage = () => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [bookInput, setBookInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<ReportFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      address: '',
      books: [],
      content: '',
      images: [],
      category: '',
      size: '',
      wifi: '',
      outlet: '',
      noise: '',
      moods: [],
    },
  });

  const images = watch('images');

  const handleImagesChange = (newFiles: File[], onChange: (value: File[]) => void) => {
    imagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
    onChange(newFiles);
  };

  const handleAddBookTag = () => {
    if (bookInput && authorInput) {
      const currentBooks = watch('books') || [];
      setValue('books', [
        ...currentBooks,
        {
          title: bookInput,
          author: authorInput,
        },
      ]);
      setBookInput('');
      setAuthorInput('');
    }
  };

  const handleRemoveTag = (index: number) => {
    const currentBooks = watch('books');
    setValue(
      'books',
      currentBooks.filter((_, i) => i !== index)
    );
  };

  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [imagePreviews]);

  const onSubmit = async (data: ReportFormData) => {
    try {
      const response = await postReportPlace(data, data.images);
      if (response) {
        navigate('/');
      }
    } catch (error) {
      console.error('제보 등록 실패:', error);
      handleError(error);
    }
  };

  return (
    <StyledWrapper>
      <Header>
        <BackButton onClick={handleBackClick}>
          <img src={back} alt="뒤로가기" />
        </BackButton>
        <Title>제보 등록</Title>
      </Header>

      <StyledTitleText>제보 장소</StyledTitleText>
      <StyledContentText>공간 이름</StyledContentText>
      <CenteredContainer>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SmallInput placeholder="제보할 공간 이름을 작성해주세요" {...field} />
          )}
        />
      </CenteredContainer>

      <StyledContentText>공간 주소</StyledContentText>
      <AddressSearch control={control} />

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

      <StyledContentText>공간 유형</StyledContentText>
      <StyledBtnGap>
        <Controller
          name="category"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['야외', '실내']}
              textColor="#70520F"
              bgColor="#FFF4C1"
              borderRadius={48}
              fontSize={1.6}
              fontWeight="400"
              onSelectionChange={(selected) => onChange(selected)}
            />
          )}
        />
      </StyledBtnGap>

      <StyledContentText>공간 크기</StyledContentText>
      <StyledBtnGap>
        <Controller
          name="size"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['부족', '보통', '넉넉']}
              textColor="#70520F"
              bgColor="#FFF4C1"
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
              textColor="#70520F"
              bgColor="#FFF4C1"
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
          name="outlet"
          control={control}
          rules={{ required: true, validate: (value) => value.length > 0 }}
          render={({ field: { onChange } }) => (
            <SingleSelectBtnGroup
              options={['부족', '보통', '넉넉']}
              textColor="#70520F"
              bgColor="#FFF4C1"
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
              textColor="#70520F"
              bgColor="#FFF4C1"
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
          name="moods"
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
              textColor="#70520F"
              bgColor="#FFF4C1"
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
        <SmallInput
          value={bookInput}
          onChange={(e) => setBookInput(e.target.value)}
          placeholder="해당 공간이 보유하고 있던 책 제목을 입력해주세요."
        />
      </CenteredContainer>
      <StyledContentText>작가</StyledContentText>
      <CenteredContainer>
        <InputWithButtonContainer>
          <SmallInput
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            placeholder="해당 책의 작가를 기재해주세요."
          />
          <AddTagButton onClick={handleAddBookTag} disabled={!bookInput || !authorInput}>
            추가
          </AddTagButton>
        </InputWithButtonContainer>
      </CenteredContainer>
      <Controller
        name="books"
        control={control}
        render={({ field: { value } }) => (
          <BookTagsContainer>
            {value?.map((book, index) => (
              <BookTag key={index}>
                📚 {book.title} - {book.author}
                <button onClick={() => handleRemoveTag(index)} className="remove-tag">
                  ×
                </button>
              </BookTag>
            ))}
          </BookTagsContainer>
        )}
      />

      <StyledTitleText>해당 공간에 대한 후기를 남겨주세요!</StyledTitleText>
      <CenteredContainer>
        <Controller
          name="content"
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
        <CompleteBtn onClick={handleSubmit(onSubmit)} disabled={!isValid} variant="yellow">
          작성 완료
        </CompleteBtn>
      </CenteredContainer>
    </StyledWrapper>
  );
};
