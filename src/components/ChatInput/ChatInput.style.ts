import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fafafa;
  border-top: 0.5px solid #f0f0f0;
  height: 70px;
`;

export const TextInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
  background-color: #efefef;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  outline: none;
  color: #6e6e6e;
  margin-right: 10px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;
