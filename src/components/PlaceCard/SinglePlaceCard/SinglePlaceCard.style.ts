import styled from 'styled-components';

import BookMarkIcon from '@/assets/BookMark/bookmark.svg';
import BookMarkIconFill from '@/assets/BookMark/bookmarkFill.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: none;
`;

export const Image = styled.img`
  width: 153px;
  height: 153px;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-grow: 1;
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

export const ReviewCount = styled.div`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fonts.regular400};
  color: #676767;
`;

export const BookmarkButton = styled.button<{ isSaved: boolean }>`
  background-image: ${({ isSaved }) =>
    isSaved ? `url(${BookMarkIconFill})` : `url(${BookMarkIcon})`};
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0px;
  top: 163px;
`;
