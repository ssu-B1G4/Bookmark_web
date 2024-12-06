import styled from 'styled-components';

export const AddressSearchWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  /* z-index: 1000; */
`;

export const StyledInput = styled.input`
  flex: 1;
  height: 48px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e3e5e5;
  font-size: 1.3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #fff4c1;
  color: #70520f;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 1.3rem;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 500px;
  max-width: 90vw;
`;

export const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  z-index: 10;
`;
