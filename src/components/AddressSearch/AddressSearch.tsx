import { useState } from 'react';

import DaumPostcode from 'react-daum-postcode';
import { Control, Controller } from 'react-hook-form';

import { ReportFormData } from '@/types/ReviewPage/ReviewFormData';

import {
  AddressSearchWrapper,
  CloseButton,
  InputWrapper,
  ModalBackground,
  ModalContent,
  SearchButton,
  StyledInput,
} from './AddressSearch.style';

interface DaumPostcodeData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
}

interface AddressSearchProps {
  control: Control<ReportFormData>;
}

interface AddressSearchProps {
  control: Control<ReportFormData>;
}

export const AddressSearch = ({ control }: AddressSearchProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = (data: DaumPostcodeData, onChange: (value: string) => void) => {
    onChange(data.roadAddress);
    setIsModalOpen(false);
  };

  return (
    <AddressSearchWrapper>
      <Controller
        name="address"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <>
            <InputWrapper>
              <StyledInput placeholder="주소를 검색해주세요" readOnly value={value} />
              <SearchButton onClick={() => setIsModalOpen(true)}> 주소 검색 </SearchButton>
            </InputWrapper>

            {isModalOpen && (
              <ModalBackground onClick={() => setIsModalOpen(false)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <CloseButton
                    src="//t1.daumcdn.net/postcode/resource/images/close.png"
                    alt="닫기"
                    onClick={() => setIsModalOpen(false)}
                  />
                  <DaumPostcode onComplete={(data) => handleComplete(data, onChange)} />
                </ModalContent>
              </ModalBackground>
            )}
          </>
        )}
      />
    </AddressSearchWrapper>
  );
};
