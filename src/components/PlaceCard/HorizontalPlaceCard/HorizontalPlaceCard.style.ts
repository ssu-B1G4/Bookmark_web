import { styled } from 'styled-components';

export const Card = styled.div`
  min-height: 100px;
  max-height: 100px;
  height: 100px;
  display: flex;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(125, 125, 125, 0.25);
  overflow: hidden;
  background-color: white;
  align-items: stretch;
  position: relative;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  flex: 1;
  padding: 9px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #3e3e3e;
`;

export const StyledText = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #676767;
`;

export const MoodContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

export const ReviewCount = styled.span`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #676767;
`;

export const BookmarkWrapper = styled.div``;
