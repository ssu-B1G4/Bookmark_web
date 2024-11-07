import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 10px 8px;
  width: 100%;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: black;
  padding-left: 12px;

  &::placeholder {
    color: #72777a;
  }
`;
