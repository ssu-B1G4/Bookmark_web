import styled from 'styled-components';

export const UploadArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  overflow-x: auto;
`;

export const UploadContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #e3e5e5;
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  flex-shrink: 0;

  input {
    display: none;
  }
`;

export const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UploadLabel = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: ${({ theme }) => theme.colors.black};
`;

export const ImageContainer = styled.div`
  position: relative;
  min-width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 12px;
  overflow: hidden;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ImageSlider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  overflow-x: scroll;
  width: 100%;
  scrollbar-width: none;
`;
