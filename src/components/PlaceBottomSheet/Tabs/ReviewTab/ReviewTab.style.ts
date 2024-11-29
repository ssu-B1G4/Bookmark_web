import styled from 'styled-components';

export const ReviewContainer = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  padding-bottom: 40px;
`;

export const ReviewHeader = styled.div`
  padding: 10px 0;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.bold700};
`;

export const ReviewSubText = styled.div`
  font-size: 1rem;
  color: #726c6c;
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ReviewItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ecfce5;
`;

export const ReviewProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ecfce5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Nickname = styled.span`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
`;

export const VisitDate = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #8b8b8b;
`;

export const ReviewContent = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 10px 0;
`;

export const ImageGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewImage = styled.img`
  width: 33%;
  aspect-ratio: 1;
  flex-shrink: 0;
  object-fit: cover;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 100px 0;
  white-space: pre-line;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.medium500};
  line-height: 1.5;
`;
