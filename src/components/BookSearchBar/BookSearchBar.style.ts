import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 40px;
  border: 1px solid #198155;
  border-radius: 7px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #6e6e6e;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.medium500};
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 10px;
    height: 10px;
  }
`;
