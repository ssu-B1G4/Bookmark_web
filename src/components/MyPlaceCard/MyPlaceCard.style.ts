import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 10px;
  display: flex;
  background: white;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  padding: 0 4px;
`;

export const Location = styled.p`
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  font-size: 1.2rem;
  color: #b2b2b2;
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fonts.semiBold600};
  font-size: 1.6rem;
  margin-bottom: 4px;
`;
